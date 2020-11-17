import React from "react";
import {connect} from 'react-redux';

import {baseLoaded} from "../../actions";

import './request-button.css';

const RequestButton = (props) => {
  return (
    <div className='request-button'>
      Big button
    </div>
  )
}

const mapStateToProps = ({items}) =>{
  return{
    items
  }
}

const mapDispatchToProps = {
  baseLoaded
}

export default connect(mapStateToProps,mapDispatchToProps)(RequestButton);