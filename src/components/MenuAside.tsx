import { RxDashboard } from "react-icons/rx";
import { AsideButton } from "./ui/AsideButtons";
import { LuAppWindow, LuLogOut } from "react-icons/lu";
import { RiSettingsLine, RiTeamFill } from "react-icons/ri";
import { PiFiles } from "react-icons/pi";
import logoWhite from "../assets/img/logoKanaryWhiteBig.png"

export const MenuAside = () => (
  <aside className="bg-[#0F0B15] text-white w-65 h-full flex flex-col justify-between mask-r-from-97%">
    <div className="flex justify-center py-10">
      <img src={logoWhite} alt="Logo Kanary" className="w-35 h-12" />
    </div>    
    <nav className="flex flex-col grow gap-5 items-center w-full">
      <AsideButton label="Dashboard" icon={<RxDashboard />} />
      <AsideButton label="Board" icon={<LuAppWindow />} />
      <AsideButton label="Team" icon={<RiTeamFill />} />
      <AsideButton label="Project" icon={<PiFiles />} />
      <AsideButton label="Settings" icon={<RiSettingsLine />} />
    </nav>
    <div className="flex items-center justify-center pb-10">
      <AsideButton label="Log Out" icon={<LuLogOut />} />
    </div>
  </aside>
);