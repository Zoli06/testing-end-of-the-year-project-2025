import { Alert } from "../../types";
import { createContext } from "react";

export const AlertContext = createContext<Alert>({
  message: "",
  severity: "success",
  open: false,
});

export const AlertDispatchContext = createContext<(alert: Alert) => void>(
  () => {},
);
