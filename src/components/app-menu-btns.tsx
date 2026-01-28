import { LuAppWindow } from "react-icons/lu";
import { PiFiles } from "react-icons/pi";
import { RiSettingsLine, RiTeamFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

// Botões do menu principal lateral (desktop) ou do cabeçalho (mobile)
export const menuBtns = [
    {"label": "Dashboard", "icon": <RxDashboard />},
    {"label": "Board", "icon": <LuAppWindow />},
    {"label": "Equipe", "icon": <RiTeamFill />},
    {"label": "Projeto", "icon": <PiFiles />},
    {"label": "Opções", "icon": <RiSettingsLine />},
  ]