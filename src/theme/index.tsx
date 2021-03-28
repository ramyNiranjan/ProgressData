import React from "react";
import {
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import defaultConfig from "./theme";

interface indexProps {
  children: React.ReactNode;
}

const PDthemeProvider: React.FC<indexProps> = ({ children }) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(createMuiTheme(defaultConfig))}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default PDthemeProvider;
