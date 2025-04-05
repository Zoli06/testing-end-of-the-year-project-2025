import { Outlet } from "react-router";

export function UnauthenticatedPage() {
  return (
    <div className="flex flex-col items-stretch justify-center h-screen">
      <Outlet />;
    </div>
  );
}
