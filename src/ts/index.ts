import type { SvgIconTypeMap } from "@material-ui/core";
import type { OverridableComponent } from "@material-ui/core/OverridableComponent";

export type DrawerItem = {
  route?: string;
  label: string;
  Icon?: OverridableComponent<SvgIconTypeMap>;
};
