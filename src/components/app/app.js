import React from 'react';
import '@atlaskit/css-reset';
import './app.css';
import {BeerDataProvider} from "../beer-api-context";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ExportPage from "../export-page";


const App = () => {
  return (
    <BeerDataProvider value={'test'}>
      <Router>
        <Switch>
          <Route path='/' component={() => (<h1>Welcome</h1>)} exact/>
          <Route path='/export/' component={ExportPage}/>
          <Route render={() => {
            return <h3>Page not found</h3>
          }} />
        </Switch>
      </Router>
    </BeerDataProvider>
  )
}

export default App;