import { createContext, useContext, useMemo, useState } from "react";
import Loader from "@components/shared/loader";
import { createPortal } from "react-dom";

// Define interface for context values
interface LoaderContextProps {
  open: boolean;
  loader: (open: boolean) => void;
}

// Initialize context with undefined for now
const Context = createContext<LoaderContextProps | undefined>(undefined);

// Default value for the loader state
const defaultValues = {
  open: false,
};

// LoaderContextProvider component
export function LoaderContextProvider({ children }: { children: React.ReactNode }) {
  const [open, loader] = useState(defaultValues.open);
  const $portal_root = typeof window === "undefined" ? null : document.querySelector("#root-loader-portal");

  // Memoize values to avoid unnecessary re-renders
  const values = useMemo(() => ({ open, loader }), [open]);

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root !== null ? createPortal(<Loader open={open} />, $portal_root) : null}
    </Context.Provider>
  );
}

// Custom hook to use the loader context
export function useLoaderContext() {
  const context = useContext(Context);

  if (context === undefined || context === null) {
    throw new Error("LoaderContext must be used within a LoaderContextProvider");
  }

  return context;
}
