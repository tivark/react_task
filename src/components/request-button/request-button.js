import React from "react";
import {connect} from 'react-redux';

import {baseLoaded} from "../../actions";

import './request-button.css';
import BeerService from "../../services/beer-service";

const RequestButton = (props) => {

  const getItemsList = () => {
    const beerService = new BeerService();
    beerService.getData()
      .then((data) => {
        props.baseLoaded(data);
      })
      .catch((error) => {
        console.error(error.message);
      })
  }

  return (
    <div className='request-button' onClick={getItemsList}>
      Big button
    </div>
  )
}

const mapStateToProps = ({items}) => {
  return {
    items
  }
}

const mapDispatchToProps = {
  baseLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestButton);