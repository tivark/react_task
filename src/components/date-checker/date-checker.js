import React from 'react';
import DateOption from "../date-option";
import './date-checker.css';

const DateChecker = () => {
  return (
    <div className='date-checker'>
      <span className='date-checker__title'>Временной интервал</span>
      <div className='date-options'>
        <DateOption label='Начало интервала' type='startDate'/>
        <DateOption label='Конец интервала' type='endDate'/>
      </div>
      <span>Длина интервала не более 4 месяцев</span>
    </div>
  )
}

export default DateChecker;