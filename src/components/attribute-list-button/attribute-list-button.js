import React from "react";
import {Button} from "@material-ui/core";

import './attribute-list-button.css';

const AttributeListButton = ({type, isActive}) => {
  let buttonText = '';
  if (type === 'ADD_ALL') {
    buttonText = 'Добавить всё';

  } else {
    buttonText = 'Удалить всё'
  }
  return <Button variant='contained' disabled={isActive}>{buttonText}</Button>
}

export default AttributeListButton;