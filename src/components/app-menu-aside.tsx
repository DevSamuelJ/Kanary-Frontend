import { AsideButton } from "./ui/aside-buttons";
import { LuLogOut } from "react-icons/lu";
import { RiMenuUnfold3Line, RiMenuUnfold4Line } from "react-icons/ri";
import { useState } from "react";
import { CustomBtn1 } from "./ui/custom-btn-1";
import { motion } from "motion/react";
import { listMenuBtns } from "./app-list-menu-btns";

import logoWhite from "../assets/img/logo-white.png"
import { useNavigate } from "react-router";

// Menu principal lateral da aplicação
export const MenuAside = () => {

  // Hook para retração/expansão do AsideMenu
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
  // Hook para navegação
  const navigate = useNavigate();

  return (
    <motion.aside id="container"
      animate={{ width: isMenuOpen ? 210 : 60 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="bg-[#0F0B15] text-white h-full flex flex-col shrink-0 justify-between mask-r-from-97%"
    >
      {/* Botão retrátil */}
      <CustomBtn1 
        icon={ isMenuOpen ? <RiMenuUnfold4Line /> : <RiMenuUnfold3Line />} 
        className="w-10 border border-gray-700 mt-3 mr-3 self-end"
        onClick={ () => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true) }
      />

      {/* Logo Kanary */}
      <div className="flex justify-center items-center pb-10 pt-5 px-5">
        {isMenuOpen
          ? <img src={logoWhite} alt="Logo Kanary" className="w-35 h-12 pointer-fevents-none" />
          : <p className="text-3xl pt-2 pointer-events-none">K</p>
        }  
      </div>    

      {/* Navegação */}
      <nav className="flex flex-col grow gap-5 items-center w-full">
        {listMenuBtns.map((btn) => (
          <AsideButton 
              key={btn.label} 
              children={isMenuOpen ? btn.label : undefined} 
              icon={btn.icon}
              className={isMenuOpen ? "pl-11" : "justify-center"}
              title={isMenuOpen ? undefined : btn.label}
              aria-label={btn.label}
              onClick={() => navigate(btn.route)}
          />
        ))}
      </nav>

      {/* Log Out */}
      <div className="flex items-center justify-center pb-10">
        <AsideButton
          children={isMenuOpen ? "Log Out" : ""} 
          icon={<LuLogOut />}
          className={isMenuOpen ? "pl-11" : "justify-center"}
          title="Log Out"
          aria-label="Log Out"
          onClick={() => navigate("./login")}
        />
      </div>
    </motion.aside>
  )
}