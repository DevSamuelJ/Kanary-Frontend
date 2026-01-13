import { Dashboard } from "./Dashboard";
import { MenuAside } from "../../components/MenuAside";
import { MenuHeader } from "../../components/MenuHeader";

export function Layout() {
  return (
    <div className="flex w-screen h-screen bg-linear-to-b from-[#0F172A] via-[#15142B] to-[#1A102C]">
      <MenuAside />
      <main className="flex flex-col text-white w-[calc(100%-220px)] min-w-250 items-center">
        <MenuHeader />
        <Dashboard />
      </main>
    </div>
  );
}
