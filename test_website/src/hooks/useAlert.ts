import { useContext } from "react";
import { Alert as AlertType } from "../types";
import { AlertContext, AlertDispatchContext } from "../context/alert/context";

export function useAlert() {
  const alert = useContext(AlertContext);
  const dispatch = useContext(AlertDispatchContext);

  if (!alert || !dispatch) {
    throw new Error("useAlert must be used within an AlertProvider");
  }

  const showAlert = (
    message: AlertType["message"],
    variant: AlertType["variant"],
  ) => {
    dispatch({ ...alert, message, variant, open: true });
  };

  const closeAlert = () => {
    dispatch({ ...alert, open: false });
  };

  return { alert, showAlert, closeAlert };
}
