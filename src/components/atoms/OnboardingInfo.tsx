import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

interface OnboardingInfoProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "left",
    padding: "20px",
    backgroundColor: " #fff",
  },
  intro: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    overflowWrap: "break-word",
    padding: "20px",
  },
  boxCommon: {
    flex: 1,
    lineHeight: 1.8,
    fontSize: "14px",
  },
  title: {
    paddingLeft: "20px",
    fontWeight: "bold",
    // font-family: Stratos;
    fontSize: "24px",
    fontStyle: "normal",
    letterSpacing: "-0.03em",
  },
}));

const OnboardingInfo: React.FC<OnboardingInfoProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Getting started with your diversity measuremnet
      </Typography>
      <Box className={classes.intro}>
        <Box component="span" className={classes.boxCommon}>
          At this point you have most likely done some anchoring work, meaning
          that your have had a workshop, introducing why D&I work and measuring
          is important and the benefits of measunidng. You will need the folling
          to be able to complete a send out.
        </Box>
        <Box component="span" className={classes.boxCommon}>
          <ol>
            <li>
              A .csv with your employee emails, first name, Last
              name,titles/roles and departments, countries (for some larger
              companies).
            </li>
            <li>
              Match you’r employees to department if there is extra work needed.
            </li>
            <li>Send off and potential reminders</li>
          </ol>
        </Box>
      </Box>
    </div>
  );
};

export default OnboardingInfo;
