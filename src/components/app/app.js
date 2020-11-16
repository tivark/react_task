import React from 'react';
import OptionsPanel from "../options-panel";
import DataPanel from '../data-panel';
import './app.css';


const App = () => {
  return (
    <div className="main-wrapper">
      <h1>Экспорт данных</h1>
      <div className='panels-wrapper'>
        <OptionsPanel/>
        <DataPanel/>
      </div>
    </div>
  )
}

export default App;