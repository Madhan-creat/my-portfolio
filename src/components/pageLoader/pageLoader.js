import React,{useState,useEffect} from 'react'
import { Animate } from 'react-move'
import LinearProgress from "@material-ui/core/LinearProgress";
import leaf2 from "../../assests/leaf2.png";
import Fade from 'react-reveal/Fade';
import "../../pages/landingpage/landinpage.css";
export default function PageLoader() {

const [startLoading, handleLoading] = useState(0);
  
  useEffect(() => {
    handleLoading(1);
  })


    return (
        <Animate
        start={()=>({value: startLoading})}
        update={()=>({
value:[startLoading]
        })}
    >
    {({value})=>{
return(
    <div className="loader-main">
    
            <div className="text-center">
            <div  >
            <Fade bottom>  <img
            className="main"
                
                alt="main-logo"
                src={leaf2}
               
              ></img></Fade>
                <h2 className="loader" >Loading</h2>
    </div>
           <div className="loaderss">
            
              <div className="loaderProgress" >
                <LinearProgress
                  className="linear-progress-bar"
                  placement="center"
                  value={value}
                />
              </div>
              </div>
            </div>
          </div>

);
    }}
        
        </Animate>
    )
};

