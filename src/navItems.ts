import type { IconType } from "react-icons";
import { MdDashboardCustomize, MdBarcodeReader } from "react-icons/md";
import { FaTruck, FaBox, FaUser, FaCog } from "react-icons/fa";

export interface NavItem {
  path: string;
  label: string;
  icon: IconType;
}

export const DEFAULT_TITLE = "Bem vindo(a) ao AdminCore";

export const NAV_ITEMS: NavItem[] = [
  { path: "/dashboard", label: "Dashboard", icon: MdDashboardCustomize },
  { path: "/produtos", label: "Produtos", icon: MdBarcodeReader },
  { path: "/entregas", label: "Entregas", icon: FaTruck },
  { path: "/recebimentos", label: "Recebimentos", icon: FaBox },
  { path: "/perfil", label: "Perfil", icon: FaUser },
  { path: "/configs", label: "Configs", icon: FaCog  }
];