import React from "react";
import OptionsPanel from "../options-panel";
import DataPanel from "../data-panel";
import RequestButton from "../request-button";
import Paper from '@material-ui/core/Paper';

import './export-page.css';

const ExportPage = () => {
  return (
    <Paper className="export-page-container">
      <h4 className='export-page__title'>Экспорт данных об оценках</h4>
      <div className='panels-wrapper'>
        <OptionsPanel/>
        <DataPanel/>
      </div>
      <RequestButton />
    </Paper>
  )
}

export default ExportPage;