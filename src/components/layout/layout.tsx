import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
