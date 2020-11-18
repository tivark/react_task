import React from 'react';
import {connect} from 'react-redux';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import {DateTimePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {changeDate} from "../../actions";

import './date-option.css';

const DateOption = (props) => {
  const {label, type} = props;
  const onDateChange = (date) => {
    props.changeDate(type, date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className='date-option'>
        <label className='date-option__label'>{label}</label>
        <DateTimePicker value={props.dateFields[type]} onChange={onDateChange}/>
      </div>
    </MuiPickersUtilsProvider>
  )
}
const mapStateToProps = (state) => {
  return {
    dateFields: state.datePeriod
  }
}

const mapDispatchToProps = {
  changeDate
}

export default connect(mapStateToProps, mapDispatchToProps)(DateOption);