import { Outlet } from "react-router";

export function UnauthenticatedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="w-xl">
        <Outlet />
      </div>
    </div>
  );
}
