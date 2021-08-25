import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Intro from './Intro'
import  webdevelopment from "../assests/webdevelopment.png";
import Zoom from 'react-reveal/Zoom';
import Swing from 'react-reveal/Swing';
import hand from "../assests/hand.png";
import { Link } from '@reach/router';
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function Aboutme() {
    return (
        <Grid xs={12} className="aboutme">
            <Grid xs={12}  className="about">
        <Zoom cascade delay={200}>
           <Typography className="head">
               Hello there, I'm Fiza <Swing delay={1500} count={3} ><img src={hand} alt="hand" className="swing"/></Swing>
           </Typography>
           </Zoom>
           <Typography className="body">
               Passionate Web and Mobile App Developer having an experience of building Web and Mobile Application with Javascript / React Js / NodeJs / React Native and some other cool liberaries and framework.
           </Typography>
           <Grid className="btn_div" >
           <Grid  className="buttons">
          <AnchorLink href="#contact" style={{textDecorationLine:"none"}}  >
<Typography className="hire">
    Contact Me
</Typography>
           </AnchorLink>
          </Grid>
          <Grid  className="buttons">
          <a href="https://drive.google.com/file/d/1MdlNJ0vtZBQKgLcx0a64Z92c2ncGpX9w/view?usp=sharing" target="_blank" style={{textDecorationLine:"none"}}>
<Typography className="hire">
   See my Resume
</Typography>
</a> {/* </Link> */}
          </Grid>
          </Grid>
           </Grid>
           <Grid xs={12} className="img_div">
           <img className="image" src={webdevelopment} alt="none" />
           </Grid>
        </Grid>
    )
}
