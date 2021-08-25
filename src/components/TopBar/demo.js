import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBarCollapse from "./AppBarCollapse";
import debounce from "../debounce";

const styles = {
  root: {
    flexGrow: 1,
    color: "#55198b",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navigation: {
    backgroundColor: "white",
    color: "#55198b",
    transition: "top 0.6s",
    height: "80px",
  },
  toggleDrawer: {},
  appTitle: {
    color: "#55198b",
    fontSize: "2.8rem",
    marginTop: ".2rem",
    fontFamily: "Dancing Script",
  },
};

function ButtonAppBar(props) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  const { classes } = props;
  return (
    <AppBar
      position="fixed"
      className={classes.navigation}
      style={{ top: visible ? "0" : "-90px" }}
    >
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          className={classes.appTitle}
        >
          Fiza Waseem
        </Typography>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
