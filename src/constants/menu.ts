import { DrawerItem } from "../ts";
import { ROUTES } from "./routes";

export const DRAWER_LIST: DrawerItem[] = [
  {
    route: ROUTES["D&I-measurement"],
    label: "D&I measurement",
  },
  {
    route: ROUTES.Goals,
    label: "Goals",
  },
  {
    route: ROUTES["Improvement-suggestions"],
    label: "Improvement suggestions",
  },
  {
    route: ROUTES.Paygap,
    label: "Paygap measurement",
  },
  {
    route: ROUTES.ISO,
    label: "ISO Certification",
  },
];
