import React from "react";
import "./pages.css";
import { Grid } from "@material-ui/core";
import Demo from "../components/TopBar/demo";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Progress from "./Progress";
import Project from "./Project";
import ContactMe from "./ContactMe";
import Education from "./Education.js";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
export default function Intro({ children }) {
  return (
    <Grid
      xs={12}
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Demo />
      <Aboutme />
      <Education />
      <Skills />
      <Progress />
      <Project />
      <ContactMe />
      {children}
      <Grid class="icon-bar">
        <a href="https://wa.me/9381688685 " class="whatsapp" target="blank">
          <WhatsAppIcon className="icon" />
        </a>
      </Grid>
    </Grid>
  );
}
