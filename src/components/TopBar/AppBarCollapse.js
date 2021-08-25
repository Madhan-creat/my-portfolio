/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
 import React from "react";
 import { Button,  MenuItem } from "@material-ui/core";
 import { withStyles } from "@material-ui/core/styles";
 import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
 import { Link } from '@reach/router';
 import AnchorLink from 'react-anchor-link-smooth-scroll'
 const styles = theme => ({
   root: {
     position: "absolute",
     right: 0
   },
   buttonBar: {
     [theme.breakpoints.down("xs")]: {
       display: "none"
     },
     margin: "10px",
     paddingLeft: "16px",
     right: 0,
     position: "relative",
     width: "100%",
     background: "transparent",
     color:"#55198b"
   }

 });
 
 const AppBarCollapse = props => (
   <div className={props.classes.root}>
     <ButtonAppBarCollapse>
       <MenuItem > 
      <AnchorLink href='#skills'>
       Skills
       </AnchorLink>
       </MenuItem>
       <MenuItem><AnchorLink href='#Projects'>
       Projects</AnchorLink></MenuItem>
       <MenuItem><AnchorLink href='#skills'>
       Achievement</AnchorLink></MenuItem>
       <MenuItem><AnchorLink href='#contact'>
       Contact me</AnchorLink></MenuItem>
     </ButtonAppBarCollapse>
     <div className={props.classes.buttonBar} id="appbar-collapse">
       <Button color="#55198b">   
        <AnchorLink href='#skills'>
       Skills</AnchorLink>
       </Button>
       <Button color="#55198b"><AnchorLink href='#Projects'>
       Projects</AnchorLink></Button>
       <Button color="#55198b"><AnchorLink href='#skills'>
       Achievement</AnchorLink></Button>
       <Button color="#55198b"><AnchorLink href='#contact'>
       Contact me</AnchorLink></Button>
     </div>
   </div>
 );
 
 export default withStyles(styles)(AppBarCollapse);
 