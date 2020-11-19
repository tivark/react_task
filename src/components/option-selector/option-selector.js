import React from 'react';
import Paper from '@material-ui/core/Paper';

const OptionSelector = (props) => {
  return (
    <Paper className='option-selector'>
      <div className='option-title'>Title</div>
    </Paper>
  )
}
const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {

}
export default connect(null,null)(OptionSelector);