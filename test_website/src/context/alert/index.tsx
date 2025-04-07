import { AlertContext, AlertDispatchContext } from "./context.ts";
import { ReactNode, useState } from "react";
import { Alert as AlertType } from "../../types";
import { Alert } from "../../components/common/Alert.tsx";

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState<AlertType>({
    message: "",
    variant: "success",
    open: false,
  });

  return (
    <AlertContext.Provider value={alert}>
      <AlertDispatchContext.Provider value={setAlert}>
        {children}
        {alert.open && <Alert />}
      </AlertDispatchContext.Provider>
    </AlertContext.Provider>
  );
}
