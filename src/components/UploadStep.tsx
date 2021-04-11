/* eslint-disable no-empty-pattern */
import { Box, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import { csvKeys } from "../constants/csvKeys";

import { AddEmployees } from "./atoms/AddEmployees";
import DialogBox from "./atoms/DialogBox";
import { InfoBar } from "./atoms/InfoBar";
import { TableStep } from "./TableStep";

interface UploadStepProps {}

export const UploadStep: React.FC<UploadStepProps> = ({}) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const [error, setError] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

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

  const fileUploadClickHandler = (data: any, nextStep: boolean) => {
    setLoading(true);
    if (data?.length > 0) {
      if (!checkingUploadIsValid(data)) {
        setOpenDialog(true);
        return console.log("not match");
      }
      setCsvData(data);
      setLoading(false);
      if (nextStep) return settingCount();
    }
  };

  const checkingUploadIsValid = (data: [{}]) => {
    const uploadedKeys = Object.keys(data[0]);
    return csvKeys.every((csvKey) => {
      return uploadedKeys.find((uploadedKey) =>
        uploadedKey.toLocaleLowerCase().includes(csvKey)
      );
    });
  };

  const errorHandler = (error: Error) => {
    if (error) {
      setError(error.message);
      return;
    }
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
        return (
          <AddEmployees>
            <CSVReader
              parserOptions={{ header: true }}
              onFileLoaded={(data) => fileUploadClickHandler(data, true)}
              onError={errorHandler}
              inputStyle={{ height: "47px" }}
            />
          </AddEmployees>
        );
      case 2:
        return (
          <TableStep
            tableData={csvData}
            fileUploadClickHandler={fileUploadClickHandler}
            settingCount={settingCount}
          />
        );
      case 3:
        return (
          <InfoBar
            introTitle="STEP1"
            title={`Employees(${csvData.length})`}
            progressBar
          />
        );
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
  return (
    <Box className={classes.contentShift}>
      {getStepContent(step)}
      <DialogBox open={openDialog} setOpen={setOpenDialog} />
    </Box>
  );
};
