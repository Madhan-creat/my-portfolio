import {  Grid, Typography } from '@material-ui/core'
import React from 'react'
import working from '../assests/working.png'
import victory from '../assests/victory.png'
import fire from '../assests/fire.png'
import {  framework, Programs } from '../components/data';
import Fade from 'react-reveal/Fade';
export default function Skills() {
    return (
        <div id="skills"  className="mt-5">
      <Grid xs={12} className="skils mt-5" >
      <Fade right xs={12} sm={6}>
    <Grid >  
    <img src={working} alt="p" className="work"/></Grid>
    </Fade>
    <Fade left xs={12} sm={6}>
    <Grid >
        <Typography className="what">
            What i do! <img src={victory} alt="victory" className="victory"/>
        </Typography>
        <Typography className="subTitle">
        A DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </Typography>
        <Grid className="div">
        {Programs.map((item)=>{
            return(
            <Grid xs={1} key={item.id} className="lang">
                <img src={item.Img} alt="d" className="lang_img"/>
                <Typography className='name'>{item.name}</Typography>
            </Grid>
            );    })}
           
         
        </Grid>
        <Grid className="info">
        {
            framework.map((item)=>{
                return(
                    <Grid key={item.id} style={{display: "flex"}}>
                    <img src={fire} alt="fire" className="fire"/>
            <Typography className="div_text">
               {item.name}
            </Typography>
            </Grid>
                );
            })
        }
       
        </Grid>
        
    </Grid>
    </Fade> 
              </Grid>
        
              </div>
    )
}
