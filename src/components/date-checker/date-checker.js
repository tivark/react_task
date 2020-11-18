import React from 'react';
import DateOption from '../date-option';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/styles";
import './date-checker.css';

const useStyles = makeStyles({
  root:{
    backgroundColor: '#EAEFF7',
    margin: '10px'
  }
})

const DateChecker = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className='date-checker'>
        <span className='date-checker__title'>Временной интервал</span>
        <div className='date-options'>
          <DateOption label='Начало интервала' type='startDate'/>
          <DateOption label='Конец интервала' type='endDate'/>
        </div>
        <span>Длина интервала не более 4 месяцев</span>
      </div>
    </Paper>
  )
}

export default DateChecker;