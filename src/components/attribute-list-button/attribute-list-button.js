import React from "react";
import {Button} from "@material-ui/core";
import {connect} from 'react-redux';
import {relocateAllAttributes} from "../../actions";

import './attribute-list-button.css';

const AttributeListButton = (props) => {
  const {type, isInactive, columnId} = props;
  let buttonText = type === 'ADD_ALL' ? 'Добавить всё' : 'Удалить всё';

  const onClickHandler = ()=>{
    props.relocateAllAttributes(columnId);
  }

  return (
    <Button
      variant='contained'
      disabled={isInactive}
      onClick={onClickHandler}>
      {buttonText}
    </Button>
  );
}

const mapDispatchToProps = {
  relocateAllAttributes
}

export default connect(null, mapDispatchToProps)(AttributeListButton);