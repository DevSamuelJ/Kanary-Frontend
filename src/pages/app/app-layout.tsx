import { MenuAside } from "../../components/menu-aside";
import { MenuHeader } from "../../components/menu-header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex w-screen h-screen bg-linear-to-b from-[#0F172A] via-[#15142B] to-[#1A102C] overflow-hidden">
      <MenuAside /> {/* Menu laterial */}
      <main className="flex flex-col text-white flex-1 overflow-hidden">
        <MenuHeader /> {/* Cabeçalho */}
        <section className="flex flex-1 overflow-y-auto h-full">
          <Outlet /> {/* Componente para trocar páginas dentro do app */}
        </section>
      </main>
    </div>
  );
}
