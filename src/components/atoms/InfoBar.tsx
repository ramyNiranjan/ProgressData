import {
  Box,
  LinearProgress,
  makeStyles,
  Theme,
  Typography,
  ButtonProps,
} from "@material-ui/core";
import React from "react";
import { CustomButton } from "./CustomButton";

interface InfoBarProps extends ButtonProps {
  title: string;
  introTitle: string;
  btnText?: string;
  progressBar?: boolean;
  actionBtn?: boolean;
  disabled?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  root: (actionBtn: any) => {
    return {
      backgroundColor: " #fff",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      height: "47px",
      borderRadius: "4px",
      marginRight: actionBtn && "15px",
    };
  },
  btn: {
    height: "47px",
    width: "138px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  progressBar: {
    borderRadius: 5,
    width: "115px",
    height: "15px",
  },
  introTitle: {
    fontWeight: "bold",
    fontSize: "12px",
    textAlign: "left",
    paddingLeft: "20px",
    marginBottom: "5px",
  },
}));

export const InfoBar: React.FC<InfoBarProps> = ({
  title,
  progressBar = false,
  actionBtn = false,
  introTitle,
  btnText,
  disabled,
  onClick,
}) => {
  const classes = useStyles(actionBtn);
  return (
    <Box>
      <Typography className={classes.introTitle}>{introTitle}</Typography>
      <Box className={classes.main}>
        <Box className={classes.root}>
          <Typography className={classes.title}>{title}</Typography>
          {progressBar && (
            <LinearProgress
              variant="determinate"
              value={50}
              className={classes.progressBar}
            />
          )}
        </Box>
        {actionBtn && (
          <CustomButton
            btnTitle={btnText}
            disabled={disabled}
            onClick={onClick}
          />
        )}
      </Box>
    </Box>
  );
};
