/* eslint-disable no-empty-pattern */
import { Box, Grow, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";
import { AddEmployees } from "./atoms/AddEmployees";
import { InfoBar } from "./atoms/InfoBar";

interface UploadStepProps {}

export const UploadStep: React.FC<UploadStepProps> = ({}) => {
  const [step, setStep] = useState(0);

  const useStyles = makeStyles((theme: Theme) => ({
    contentShift: {
      transition: theme.transitions.create(["height", "margin"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.complex,
      }),
    },
  }));

  const settingCount = () => {
    setStep((pre) => pre + 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <InfoBar
            introTitle="STEP1"
            title="Employees - Add employees"
            actionBtn
            btnText="Start"
            onClick={settingCount}
          />
        );
      case 1:
        return <AddEmployees onClick={settingCount} />;
      case 2:
        return (
          <InfoBar
            introTitle="STEP1"
            title="Employees - Add employees"
            actionBtn
            btnText="Start"
            onClick={settingCount}
          />
        );
      case 3:
        return <AddEmployees onClick={settingCount} />;
      default:
        return (
          <InfoBar
            introTitle="STEP1"
            title="Employees - Add employees"
            actionBtn
            btnText="Start"
          />
        );
    }
  }
  const classes = useStyles();
  return <Box className={classes.contentShift}>{getStepContent(step)}</Box>;
};
