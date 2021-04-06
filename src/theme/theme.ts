const defaultConfig: any = {
  spacing: 4,
  palette: {
    primary: {
      main: "#8153AE",
    },
    secondary: {
      main: "#1e976f",
    },
    sidebar: {
      bgColor: "#26282E",
      textColor: "#808183",
    },
  },
  typography: {
    // fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: "none",
        },
        ol: {
          margin: 0,
        },
      },
    },

    MuiTypography: {
      // h1: {
      //   fontSize: 22,
      // },
      // h2: {
      //   fontSize: 20,
      // },
      // h3: {
      //   fontSize: 18,
      // },
      // h4: {
      //   fontSize: 16,
      // },
      // h5: {
      //   fontSize: 14,
      // },
      // h6: {
      //   fontSize: 14,
      // },
      // subtitle1: {
      //   fontSize: 14,
      // },
      // subtitle2: {
      //   fontSize: 16,
      // },
      body1: {
        fontSize: 14,
      },
      body2: {
        fontSize: 12,
      },
    },
    // MuiToggleButton: {
    //   root: {
    //     borderRadius: cardRadius,
    //   },
    // },
    // MuiCardLg: {
    //   root: {
    //     borderRadius: 10,
    //   },
    // },
    // MuiCard: {
    //   root: {
    //     borderRadius: cardRadius,
    //     boxShadow: "0px 5px 6px rgba(0, 0, 0, 0.04)",
    //     "& .MuiCardContent-root:last-child": {
    //       paddingBottom: 16,
    //     },
    //   },
    // },
    // MuiButton: {
    //   root: {
    //     borderRadius: cardRadius,
    //     boxShadow: "0px 5px 6px rgba(0, 0, 0, 0.04)",
    //     [breakpoints.down("md")]: {
    //       paddingTop: "8px !important",
    //       paddingBottom: "8px !important",
    //     },
    //   },
    // },
  },
};
export default defaultConfig;
