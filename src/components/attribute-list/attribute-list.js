import React from "react";
import {Button} from "@material-ui/core";
import './attribute-list.css';

const AttributeList = ({title, data}) => {
  return (
    <div className='attribute-list'>
      <span className='attribute-list__header'>
        <span className='attribute-list__title'>{title}</span>
        <Button variant='contained'>Добавить всё</Button>
      </span>
      <div className='attribute-list__items'>

      </div>
    </div>
  )
}

export default AttributeList;