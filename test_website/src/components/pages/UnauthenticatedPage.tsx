import { Outlet } from "react-router";
import { AlertProvider } from "../../context/alert";

export function UnauthenticatedPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100">
      <div className="p-3 rounded bg-dark-subtle">
        <AlertProvider>
          <Outlet />
        </AlertProvider>
      </div>
    </div>
  );
}
