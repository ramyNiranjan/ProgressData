import { Box, makeStyles, Theme } from "@material-ui/core";
import { useState } from "react";
import classNames from "classnames";

import { InfoBar } from "../components/atoms/InfoBar";

import OnboardingInfo from "../components/atoms/OnboardingInfo";
import { UploadStep } from "../components/UploadStep";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  intro: {},
  title: {
    textAlign: "left",
  },
  accordions: {
    marginBottom: "40px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    "& > *": {
      marginBottom: "20px",
    },
  },
  contentShift: {
    transition: theme.transitions.create(["height", "margin"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.complex,
    }),
  },
}));

const DashboardPage = () => {
  const classes = useStyles();

  const [disabled, setDisabled] = useState(true);

  return (
    <div className={classes.root}>
      <OnboardingInfo />
      <Box p={5} mb={10} className={classes.contentShift}>
        <div className={classNames(classes.accordions, classes.contentShift)}>
          <InfoBar
            introTitle="CURRENT STATUS"
            title="Progress for Umbrella company"
            progressBar
          />

          <UploadStep />
          <InfoBar
            introTitle="STEP2"
            title="Send survey"
            actionBtn
            btnText="Send"
            disabled={disabled}
          />
        </div>
      </Box>
    </div>
  );
};

export default DashboardPage;
