import React from "react";
import { Grid, Typography } from "@material-ui/core";
import call from "../assests/call.png";
import heart from "../assests/heart.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
export default function ContactMe() {
  const Social = [
    {
      id: 1,
      name: <GitHubIcon className="icon" />,
      link: "https://github.com/FizaWaseem",
    },
    {
      id: 2,
      name: <LinkedInIcon className="icon" />,
      link: "https://www.linkedin.com/in/fiza-waseem-26749117a/",
    },
    {
      id: 3,
      name: <MailIcon className="icon" />,
      link: "mailto:wfiza842@gmail.com",
    },
    {
      id: 4,
      name: <WhatsAppIcon className="icon" />,
      link: "https://wa.me/9203060622399 ",
    },
  ];
  const colors = [
    "rgb(0, 0, 0)",
    "rgb(58, 143, 255)",
    "rgb(252, 6, 6)",
    "#53d365",
  ];
  return (
    <div id="contact" className="conainer-fluid mt-5">
      <Grid xs={12} className="contact">
        <Typography className="contactMe">
          Contact Me <img src={call} alt="phone" className="victory" />
        </Typography>
        <Typography className="contactText">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </Typography>
        <Grid style={{ display: "flex" }}>
          {Social.map((item, i) => {
            return (
              <Grid
                key={item.id}
                className="social"
                style={{ backgroundColor: colors[i] }}
              >
                <a href={item.link} target="blank">
                  {item.name}
                </a>
              </Grid>
            );
          })}
        </Grid>
        <Typography className="projectText">
          Developed By <img src={heart} alt="heart" className="heart" /> by Fiza
          Waseem
        </Typography>
      </Grid>
    </div>
  );
}
