/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import rocket from "../assests/rocket.png";
import onlineGroceries from "../assests/onlineGroceries.png";
import onlinechat from "../assests/onlinechat.png";
import testing from "../assests/testing.png";
import dashbord from "../assests/dashbord.png";
import tailor from "../assests/tailor.png";
import pokemon from "../assests/pokemon.png";
import cloud from "../assests/cloud.svg";
import Fade from "react-reveal/Fade";

function Project() {
  return (
    <div id="Projects" className="mt-5">
      <Grid xs={12} className="mb-5 mt-5">
        <Fade bottom>
          <Typography className="what">
            Projects <img src={rocket} alt="victory" className="victory" />
          </Typography>
          <Typography className="projectText">
            SOME PROJECTS THAT I'VE DONE
          </Typography>
        </Fade>

        {/* <Grid xs={12} className="mt-5" className="proj"> */}
          {/* <Grid xs={1} md={1} className="projectDiv"> */}
            <a href="https://kudzokastoreonline.netlify.app/" target="blank">
              <img
                src={onlineGroceries}
                alt="project1"
                className="projectImg"
              />
            </a>
            <Typography className="pText">Grocery Store</Typography>
          {/* </Grid> */}

        {/* </Grid> */}
      </Grid>
    </div>
  );
}
export default Project;
