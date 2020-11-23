import React from 'react';
import DateChecker from '../date-checker';
import AttributeSelector from '../attribute-selector';
import './data-panel.css';

const DataPanel = () => {
  return (
    <div className="data-panel">
      <DateChecker/>
      <AttributeSelector/>
    </div>
  )
}

export default DataPanel;