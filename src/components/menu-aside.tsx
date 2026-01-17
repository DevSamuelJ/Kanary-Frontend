import { RxDashboard } from "react-icons/rx";
import { AsideButton } from "./ui/aside-buttons";
import { LuAppWindow, LuLogOut } from "react-icons/lu";
import { RiSettingsLine, RiTeamFill } from "react-icons/ri";
import { PiFiles } from "react-icons/pi";
import logoWhite from "../assets/img/logoWhite.png"

export const MenuAside = () => {

  const menuBtns = [
    {"label": "Dashboard", "icon": <RxDashboard />},
    {"label": "Board", "icon": <LuAppWindow />},
    {"label": "Equipe", "icon": <RiTeamFill />},
    {"label": "Projeto", "icon": <PiFiles />},
    {"label": "Opções", "icon": <RiSettingsLine />},
  ]

  return(
    <aside className="bg-[#0F0B15] text-white w-55 h-full flex flex-col justify-between mask-r-from-97%">
      <div className="flex justify-center py-10">
        <img src={logoWhite} alt="Logo Kanary" className="w-35 h-12" />
      </div>    
      <nav className="flex flex-col grow gap-5 items-center w-full">
        {menuBtns.map((btn) => (
          <AsideButton key={btn.label} label={btn.label} icon={btn.icon}></AsideButton>
          ))
        }
      </nav>
      <div className="flex items-center justify-center pb-10">
        <AsideButton label="Log Out" icon={<LuLogOut />} />
      </div>
    </aside>
  )
}