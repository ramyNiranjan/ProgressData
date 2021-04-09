import Drawer from "@material-ui/core/Drawer";
import MenuItemsList from "../MenuItemsList";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  drawer: {
    background: theme.palette.sidebar.bgColor,
    position: "static",
    width: "240px",
  },
}));

const CustomDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(classes.drawer),
      }}
    >
      <MenuItemsList />
    </Drawer>
  );
};

export default CustomDrawer;
