import React from "react";
import AttributeList from "../attribute-list";

import './attribute-selector.css';

const AttributeSelector = () => {

  const arr = ['sdfsdf', 'sdfsfs', "sdfsdf"];

  return (
    <div className='attribute-selector'>
      <span className='attribute-selector__title'>Атрибуты выгрузки</span>
      <div className='attribute-selector__lists'>
      <AttributeList title='Доступные' data={arr} />
      <AttributeList title='Выбранные' data={arr} />
      </div>
    </div>
  )
}

export default AttributeSelector;