import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { useLocation } from "react-router-dom";

import { DRAWER_LIST } from "../constants/menu";
import MenuItem from "./atoms/MenuItem";

const MenuItemsList = () => {
  const { pathname } = useLocation();

  return (
    <Grid>
      <List>
        {DRAWER_LIST.map(({ label, route }) => (
          <MenuItem
            label={label}
            route={route}
            key={route}
            selected={pathname === route}
          />
        ))}
      </List>
    </Grid>
  );
};

export default MenuItemsList;
