import React from 'react'
import profile from "../assests/profile.png";

import './pages.css';
import {  Grid,Typography} from '@material-ui/core';
import Data from "../components/Tab";
import { Link } from '@reach/router';
import Typing from 'react-typing-animation';
import Hamburger from 'hamburger-react'
import Demo from '../components/TopBar/demo';
import Swing from 'react-reveal/Swing';
import hand from "../assests/hand.png";
import  webdevelopment from "../assests/webdevelopment.png";
import Zoom from 'react-reveal/Zoom';
import Aboutme from './Aboutme';
import Skills from './Skills';
import  Progress  from './Progress';
import Project from './Project';
import ContactMe from './ContactMe';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import Fade from 'react-reveal/Fade';
// import Skills from './Skills';
// import Aboutme from './Aboutme';
export default function Intro({children}) {
    return (
       <Grid xs={12} style={{display:"flex",flexDirection:'column',height:"100vh"}}>
           <Demo/>
         
           <Aboutme/>
           <Skills/>
           <Progress/>
        
  <Project/>
     <ContactMe/>
           {children}
           <Grid class="icon-bar">
  <a href="https://wa.me/9203060622399 " class="whatsapp" target="blank"><WhatsAppIcon className="icon" /></a> 
</Grid>
       </Grid>
    )
}
