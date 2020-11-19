import React from 'react';
import {connect} from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {checkboxOptionToggle} from '../../actions';

const OptionCheckbox = (props) => {
  const {option, selectedOptions} = props;

  const toggleOption = (event) => {
    props.checkboxOptionToggle(option.id, event.target.name);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{option.title}</FormLabel>
      <FormGroup>
        {
          option.variants.map((variant) => {
            const isChecked = (option.id in selectedOptions)
              && selectedOptions[option.id].includes(variant.id);

            return (
              <FormControlLabel
                control={
                  <Checkbox
                    name={variant.id}
                    checked={isChecked}
                    color='primary'
                    onChange={toggleOption}
                  />
                }
                label={variant.label}
                key={variant.id}
              />
            )
          })
        }
      </FormGroup>
    </FormControl>
  )
}

const mapStateToProps = ({selectedOptions}) => {
  return {
    selectedOptions
  }
}

const mapDispatchToProps = {
  checkboxOptionToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionCheckbox);