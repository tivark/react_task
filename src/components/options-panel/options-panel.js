import React from 'react';
import {connect} from 'react-redux';
import OptionSelector from '../option-selector';

import './options-panel.css';

const OptionsPanel = (props) => {
  const groupsId = Object.keys(props.options);

  const renderOptions = groupsId.map((groupId) => {
    const group = props.options[groupId];
    return <OptionSelector key={groupId} group={group}/>
  })

  return (
    <div className='options-panel'>
      {renderOptions}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    options: state.options
  }
}

export default connect(mapStateToProps, null)(OptionsPanel);