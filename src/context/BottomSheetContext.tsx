import { ComponentProps, createContext, useCallback, useContext, useMemo, useState } from "react";
import BottomSheet from "@components/shared/BottomSheet";
import { createPortal } from "react-dom";

type BottomSheetProps = ComponentProps<typeof BottomSheet>;
type BottomSheetOption = Omit<BottomSheetProps, "open">;

interface BottomSheetValue {
  open: (options: BottomSheetOption) => void;
  close: () => void;
}

const Context = createContext<BottomSheetValue | undefined>(undefined);

const defaultValue: BottomSheetProps = {
  open: false,
  closeAnimation: false,
  body: null,
  onClick: () => {},
};

export function BottomSheetProvider({ children }: { children: React.ReactNode }) {
  const [bottomSheetState, setBottomSheetState] = useState(defaultValue);
  const $portal_root = typeof window === "undefined" ? null : document.querySelector("#root-bottom-sheet-portal");

  const close = useCallback(() => {
    document.body.style.overflow = "auto"; // 스크롤 막기
    if (bottomSheetState.closeAnimation) return;

    setBottomSheetState((prev) => ({
      ...prev,
      closeAnimation: true,
    }));

    setTimeout(() => {
      setBottomSheetState(defaultValue);
    }, 130);
  }, [bottomSheetState.closeAnimation]);

  const open = useCallback(
    ({ onClick, ...options }: BottomSheetOption) => {
      document.body.style.overflow = "hidden"; // 스크롤 막기
      setBottomSheetState({
        ...options,
        open: true,
        onClick: () => {
          close();

          if (onClick) {
            onClick?.();
          }
        },
      });
    },
    [close],
  );

  const values = useMemo(() => ({ open, close }), [open]);

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root !== null ? createPortal(<BottomSheet {...bottomSheetState} />, $portal_root) : null}
    </Context.Provider>
  );
}

export function useBottomSheetContext() {
  const values = useContext(Context);

  if (values === undefined || values === null) {
    throw new Error("BottomSheetContext 내부에서 사용해주세요.");
  }

  return values;
}
