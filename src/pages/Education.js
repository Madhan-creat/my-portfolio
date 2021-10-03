import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ImLocation } from "react-icons/im";
import { FcLibrary } from "react-icons/fc";


import Fade from "react-reveal/Fade";
export default function Project() {
    return (
        <div id="education" >
            <Grid xs={12} className="logorow">
                <Fade bottom >
                    <div className="clglogo">
                        <Typography className="what">
                            Education
                        </Typography>
                        <FcLibrary size="60px" />
                    </div>
                </Fade>
              
                   
                    <div className="education">
                       <div className="btech">
                                <Typography className="college">
                                    Dhanekula Institute of Engineering and Technology - VIJAYWADA
                                </Typography>
                                <Typography className="course">
                                    Bachelor of Technology
                                </Typography>
                                <Typography className="year">
                                    2018 - 2022
                                </Typography>
                           
                    </div>
                    <div className="btech">
                    
                                <Typography className="college">
                                    Sri Chaitanya Junior College -TRIPUPATHI
                                </Typography>
                                <Typography className="course">
                                    Intermediate
                                </Typography>
                                <Typography className="year">

                                    2016 - 2018
                                </Typography>
                    </div>
                           
                        
                    </div>
            

            </Grid>
        </div>
    );
}






