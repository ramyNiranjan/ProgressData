import {
  Link,
  Box,
  Button,
  makeStyles,
  Theme,
  Typography,
  ButtonProps,
} from "@material-ui/core";
import React from "react";

interface AddEmployeesProps extends ButtonProps {
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    flexDirection: "column",
    background: "#ffff",
    borderRadius: "4px",
    padding: "20px",
    textAlign: "left",
    lineHeight: 1.5,
  },
  btn: {
    height: "47px",
    width: "138px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  upload: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
  },
  uploadText: {},
  uploadBtn: {
    width: "138px",
    position: "relative",
    height: "47px",
  },
  orderedList: {
    lineHeight: 1.8,
    fontSize: "12px",
    marginTop: "20px",
    "& ol": {
      paddingInlineStart: "0",
    },
    paddingLeft: "15px",
  },
  link: {
    textDecoration: "underline",
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
}));

export const AddEmployees: React.FC<AddEmployeesProps> = ({
  children,
  ...ButtonProps
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Typography className={classes.title}>Add Employees</Typography>
      <Box className={classes.upload}>
        <Box className={classes.uploadText}>
          Upload a .csv file with your employees. The file needs to have the
          following column names in{" "}
          <Box>
            your own .csv file.
            <Link className={classes.link} href="#" color="inherit">
              Download an example here
            </Link>
          </Box>
        </Box>
        <Button
          className={classes.uploadBtn}
          variant="contained"
          color="primary"
          {...ButtonProps}
        >
          <div className={classes.csvUpload}>{children}</div>
          Upload .csv
        </Button>
      </Box>
      <Box className={classes.orderedList}>
        <ol>
          <li>First name</li>
          <li>Last name</li>
          <li>Title / Role</li>
          <li>Department</li>
          <li>Contry</li>
        </ol>
      </Box>
    </Box>
  );
};
