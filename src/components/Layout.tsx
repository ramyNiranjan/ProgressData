import { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./atoms/Header";
import Drawer from "./atoms/Drawer";
import Footer from "./atoms/Footer";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: "#ECECED",
  },
}));

type Props = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Toolbar />
      <div className={classes.container}>
        <Drawer />
        <main className={classes.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
