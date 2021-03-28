import { Box, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  intro: {},
  boxCommon: {},
  title: {
    textAlign: "left",
  },
}));

const DashboardPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <OnboardingInfo /> */}
      <Box p={5}>
        <Typography className={classes.title}>CURRENT STATUS</Typography>
      </Box>
    </div>
  );
};

export default DashboardPage;
