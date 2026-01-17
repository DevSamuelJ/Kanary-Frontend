import { Outlet } from "react-router";

export const AccessLayout = () => (
    <div 
        id="accessBg"
        className="w-screen h-screen bg-[url(/src/assets/img/bgDark.avif)] bg-cover bg-bottom bg-no-repeat flex justify-center items-center"
    >
        <Outlet /> { /* Componente para navegação entre as páginas de acesso. */ }
    </div>
)