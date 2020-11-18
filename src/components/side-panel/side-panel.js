import React from "react";
import {connect} from 'react-redux';
import {IconButton} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DvrIcon from '@material-ui/icons/Dvr';

import './side-panel.css';
import {Link} from "react-router-dom";

const SidePanel = (props) => {
  const {sidePanel} = props;
  const icons = {
    'HomeIcon': <HomeIcon/>,
    'DvrIcon': <DvrIcon/>,
    'BookmarkIcon': <BookmarkIcon/>
  }
  return (
    <nav className='side-panel'>
      {
        sidePanel.map((menuItem) => {
          return (
            <Link to={menuItem.path}>
              <IconButton title={menuItem.title} key={menuItem.title}>
                {icons[menuItem.icon]}
              </IconButton>
            </Link>
          )
        })
      }
    </nav>
  )
}
const mapStateToProps = (state) => {
  return {
    sidePanel: state.sidePanel
  }
}
export default connect(mapStateToProps, null)(SidePanel);