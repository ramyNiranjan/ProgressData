import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CSVReader from "react-csv-reader";
import { CustomButton } from "./atoms/CustomButton";
import Table from "./atoms/Table";

interface TableStepProps {
  tableData: any;
  fileUploadClickHandler: any;
  settingCount: any;
}
const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    backgroundColor: "#fff",
  },
  tableSection: {
    width: "80%",
    fontSize: "10px",
  },
  sideInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
    padding: "10px 20px 10px",
    "& ol": {
      paddingInlineStart: "14px",
    },
  },
  sideInfoBtn: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-left",
    justifyContent: "space-around",
  },
  sideInfoText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-left",
    justifyContent: "space-between",
    flex: 2,
    textAlign: "left",
  },
  sideInfoTitle: {
    fontSize: "14px",
    fontWeight: "bold",
  },
});

export const TableStep: React.FC<TableStepProps> = ({
  tableData,
  fileUploadClickHandler,
  settingCount,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Table tableData={tableData} className={classes.tableSection} />
      <Divider orientation="vertical" flexItem />
      <Box className={classes.sideInfo}>
        <Box className={classes.sideInfoBtn}>
          <CustomButton btnTitle="next" onClick={settingCount} />
          <CustomButton btnTitle="Upload .csv">
            <CSVReader
              parserOptions={{ header: true }}
              onFileLoaded={(data) => fileUploadClickHandler(data, false)}
              // onError={errorHandler}
              inputStyle={{ height: "47px" }}
            />
          </CustomButton>
        </Box>
        <Box className={classes.sideInfoText}>
          <Typography className={classes.sideInfoTitle}>
            Need to upload another file?
          </Typography>
          <Typography variant="body2">
            Upload a .csv file with your employees. The file need to have the
            following column names in your own .csv file.
          </Typography>
          <Box component="span" fontSize={12}>
            <ol>
              <li>Company Email</li>
              <li>First name</li>
              <li>Last name</li>
              <li>Title / Role</li>
              <li>Department</li>
              <li>Contry</li>
            </ol>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
