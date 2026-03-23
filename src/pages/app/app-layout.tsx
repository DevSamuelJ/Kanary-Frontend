import { MenuAside } from "../../components/app-menu-aside";
import { MenuHeader } from "../../components/app-menu-header";
import { MainHeader } from "../../components/main-header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex w-screen h-screen bg-linear-to-b from-[#0F172A] via-[#15142B] to-[#1A102C] overflow-hidden">

      {/* Menu aside (laptop e desktop) */}
      <div className="hidden md:block">
        <MenuAside />
      </div>
      
      <main className="flex flex-col text-white flex-1 overflow-hidden">

        {/* Menu header (mobile) */}
        <div className="block md:hidden">
          <MenuHeader />
        </div>

        {/* Busca, notificação, ajuda e perfil */}
        <MainHeader />

        <section className="flex flex-col flex-1 overflow-hidden min-h-0">
          {/* Componente para trocar páginas dentro do app */}
          <Outlet /> 
        </section>

      </main>
    </div>
  );
}
