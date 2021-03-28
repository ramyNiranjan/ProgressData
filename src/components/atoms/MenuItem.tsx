import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { DrawerItem } from "../../ts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: "#fff",
      "&$selected": {
        textDecoration: "underline",
      },
    },
    selected: {},
  })
);

type Props = DrawerItem & {
  selected?: boolean;
};

const MenuItem: React.FC<Props> = ({ route, label, selected }) => {
  const classes = useStyles();

  const link = (
    <ListItem
      button
      selected={selected}
      classes={{
        selected: classes.selected,
        button: classes.button,
      }}
    >
      <ListItemText primary={label} />
    </ListItem>
  );
  return route ? <Link to={route}>{link}</Link> : link;
};

export default MenuItem;
