import { AlertContext, AlertDispatchContext } from "./context.ts";
import { ReactNode, useState } from "react";
import { Alert } from "../../types";

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState<Alert>({
    message: "",
    severity: "success",
    open: false,
  });

  return (
    <AlertContext.Provider value={alert}>
      <AlertDispatchContext.Provider value={setAlert}>
        {children}
      </AlertDispatchContext.Provider>
    </AlertContext.Provider>
  );
}
