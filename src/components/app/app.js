import React from 'react';
import {Route, Switch} from "react-router-dom";
import ExportPage from "../export-page";

import '@atlaskit/css-reset';
import './app.css';


const App = () => {
  return (
    <Switch>
      <Route path='/' component={() => (<h1>Welcome</h1>)} exact/>
      <Route path='/export/' component={ExportPage}/>
      <Route render={() => {
        return <h3>Page not found</h3>
      }}/>
    </Switch>
  )
}

export default App;