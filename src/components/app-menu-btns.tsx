import { LuAppWindow } from "react-icons/lu";
import { PiFiles } from "react-icons/pi";
import { RiSettingsLine, RiTeamFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

// Botões do menu principal lateral (desktop) ou do cabeçalho (mobile)
export const menuBtns = [
    {"label": "Dashboard", "icon": <RxDashboard />, "route": "../app" },
    {"label": "Board", "icon": <LuAppWindow />, "route": "board"},
    {"label": "Equipe", "icon": <RiTeamFill />, "route": "equipe"},
    {"label": "Projeto", "icon": <PiFiles />, "route": "projeto"},
    {"label": "Opções", "icon": <RiSettingsLine />, "route": "opcoes"},
  ]