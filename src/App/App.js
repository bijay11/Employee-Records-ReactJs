import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

import Employees from "../Pages/Employees/Employees";

//to override default primary and secondary color
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c55b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />

          <Employees />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
