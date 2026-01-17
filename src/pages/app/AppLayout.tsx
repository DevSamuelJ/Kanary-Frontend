import { MenuAside } from "../../components/MenuAside";
import { MenuHeader } from "../../components/MenuHeader";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex w-screen h-screen bg-linear-to-b from-[#0F172A] via-[#15142B] to-[#1A102C]">
      <MenuAside /> {/* Menu laterial */}
      <main className="flex flex-col text-white w-[calc(100%-220px)] min-w-250 items-center">
        <MenuHeader /> {/* Cabeçalho */}
        <Outlet /> {/* Componente para trocar páginas dentro do app */}
      </main>
    </div>
  );
}
