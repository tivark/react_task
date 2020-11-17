import React, {useState} from 'react';
import {TextField} from "@material-ui/core";
import './date-option.css';

const DateOption = ({label, type}) => {

  const [date, setDate] = useState();

  const onDateChange = (event) => {
    setDate(event.target.value);
  }

  return (
    <div className='date-option'>
      <label className='date-option__label'>{label}</label>
      <TextField type='datetime-local' value={date} onChange={onDateChange}/>
    </div>
  )
}

export default DateOption;