import { ComponentProps, createContext, useCallback, useContext, useMemo, useState } from "react";
import Alert from "@components/shared/Alert";
import { createPortal } from "react-dom";

type AlertProps = ComponentProps<typeof Alert>;
type AlertOption = Omit<AlertProps, "open">;

interface AlertContextValue {
  open: (options: AlertOption) => void;
}

const Context = createContext<AlertContextValue | undefined>(undefined);

const defaultValues: AlertProps = {
  open: false,
  title: "",
};

export function AlertContextProvider({ children }: { children: React.ReactNode }) {
  const [alertState, setAlertState] = useState(defaultValues);
  const $portal_root = typeof window === "undefined" ? null : document.querySelector("#root-alert-portal");

  const close = useCallback(() => {
    document.body.style.overflow = "auto"; // 스크롤 막기
    setAlertState(defaultValues);
  }, []);

  const open = useCallback(
    ({ onConfirmClick, onCancelClick, ...options }: AlertOption) => {
      document.body.style.overflow = "hidden"; // 스크롤 막기

      setAlertState({
        ...options,
        onConfirmClick: async () => {
          // 비동기인 경우가 있어서 await를 추가함
          const result = await onConfirmClick?.();

          if (result) return;
          close();
        },
        onCancelClick: () => {
          close();
          onCancelClick?.();
        },
        open: true,
      });
    },
    [close],
  );

  const values = useMemo(() => ({ open }), [open]);

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root !== null ? createPortal(<Alert {...alertState} />, $portal_root) : null}
    </Context.Provider>
  );
}

export function useAlertContext() {
  const values = useContext(Context);
  if (values === undefined || values === null) {
    throw new Error("AlertContext 내부에서 사용해주세요.");
  }

  return values;
}
