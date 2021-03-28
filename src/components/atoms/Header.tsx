import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
  appBar: {
    width: "100vw",
    zIndex: theme.zIndex.drawer + 1,
  },
  avatar: {
    marginLeft: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary" className={classes.appBar}>
      <Toolbar>
        <Avatar className={classes.avatar} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
