import React from "react";
import {connect} from 'react-redux';
import {IconButton} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import HomeIcon from '@material-ui/icons/Home';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DvrIcon from '@material-ui/icons/Dvr';
import {makeStyles} from '@material-ui/styles';

import './side-panel.css';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    position: "relative",
    backgroundColor: '#4A4A4A'
  }
})

const SidePanel = (props) => {
  const {sidePanel} = props;
  const classes = useStyles();
  const icons = {
    'home': <HomeIcon/>,
    'export': <DvrIcon/>,
    'bookmark': <BookmarkIcon/>
  }
  return (
    <Drawer variant='permanent' classes={{paper: classes.paper}}>
      {
        sidePanel.map((menuItem) => {
          return (
            <Link to={menuItem.path} key={menuItem.title}>
              <IconButton title={menuItem.title}>
                {icons[menuItem.icon]}
              </IconButton>
            </Link>
          )
        })
      }
    </Drawer>
  )
}
const mapStateToProps = (state) => {
  return {
    sidePanel: state.sidePanel
  }
}
export default connect(mapStateToProps, null)(SidePanel);