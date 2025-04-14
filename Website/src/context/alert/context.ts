import { Alert } from "../../types";
import { createContext, Dispatch } from "react";

export const AlertContext = createContext<Alert | null>(null);
export const AlertDispatchContext = createContext<Dispatch<Alert> | null>(null);
