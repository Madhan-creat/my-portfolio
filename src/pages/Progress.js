import React from "react";
import fire from "../assests/fire.png";
import { Grid, Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import ProgressLine from "../components/ProgressBar";
import { framework, Programs } from '../components/data';
const Progress = () => {
  return (
    <Grid xs={12} className="process">
      <Fade bottom>
        <Typography className="what">
          Proficiency <img src={fire} alt="victory" className="victory" />
        </Typography>
      </Fade>

      <Grid className="proRate">
        <Grid xs={12} sm={6}>
          <Fade bottom>
            <h3>
              <ProgressLine
                label="Python"
                backgroundColor="#eedffc"
                visualParts={[
                  {
                    percentage: "85%",
                    color: "#af74e6",
                  },
                ]}
              />
            </h3>

            <h3>
              <ProgressLine
                label="Html/css"
                backgroundColor="#eedffc"
                visualParts={[
                  {
                    percentage: "96%",
                    color: "#af74e6",
                  },
                ]}
              />
            </h3>
            <h3>
              <ProgressLine
                label="JavaScript"
                backgroundColor="#eedffc"
                visualParts={[
                  {
                    percentage: "90%",
                    color: "#af74e6",
                  },
                ]}
              />
            </h3>
            <h3>
              <ProgressLine
                label="React Js"
                backgroundColor="#eedffc"
                visualParts={[
                  {
                    percentage: "95%",
                    color: "#af74e6",
                  },
                ]}
              />
            </h3>

            <h3>
              <ProgressLine
                label="React Native"
                backgroundColor="#eedffc"
                visualParts={[
                  {
                    percentage: "70%",
                    color: "#af74e6",
                  },
                ]}
              />
            </h3>
            <h3>
              <ProgressLine
                label="MongDB"
                backgroundColor="#eedffc"
                visualParts={[
                  {
                    percentage: "60%",
                    color: "#af74e6",
                  },
                ]}
              />
            </h3>
            <h3>
              <ProgressLine
                label="Firebase"
                backgroundColor="#eedffc"
                visualParts={[
                  {
                    percentage: "50%",
                    color: "#af74e6",
                  },
                ]}
              />
            </h3>


          </Fade>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Progress;
