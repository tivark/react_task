import React from "react";
import OptionsPanel from "../options-panel";
import DataPanel from "../data-panel";
import RequestButton from "../request-button";

import './export-page.css';

const ExportPage = () => {
  return (
    <div className="export-page-container">
      <h1>Экспорт данных</h1>
      <div className='panels-wrapper'>
        <OptionsPanel/>
        <DataPanel/>
        <RequestButton />
      </div>
    </div>
  )
}

export default ExportPage;