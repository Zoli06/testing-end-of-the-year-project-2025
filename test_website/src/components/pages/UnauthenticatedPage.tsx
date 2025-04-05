import { Outlet } from "react-router";
import { AlertProvider } from "../../context/alert";

export function UnauthenticatedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="w-xl">
        <AlertProvider>
          <Outlet />
        </AlertProvider>
      </div>
    </div>
  );
}
