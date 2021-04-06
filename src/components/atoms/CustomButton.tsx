import { Button, ButtonProps, makeStyles } from "@material-ui/core";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  btnTitle: string | undefined;
}

const useStyles = makeStyles({
  btn: {
    height: "47px",
    width: "138px",
  },
  csvUpload: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    width: "100%",
    overflow: "hidden",
    opacity: 0,
  },
});

export const CustomButton: React.FC<CustomButtonProps> = ({
  btnTitle,
  children,
  ...ButtonProps
}) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.btn}
      {...ButtonProps}
    >
      <div className={classes.csvUpload}>{children}</div>
      {btnTitle}
    </Button>
  );
};
