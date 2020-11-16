import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/app';
import {BeerDataProvider} from './components/beer-api-context'

import BeerService from './services/beer-service';

import './index.css';

const beerService = new BeerService();

ReactDOM.render(
  <React.StrictMode>
    <BeerDataProvider value={'test'}>
      <Router>
        <Route path='/' component={()=>(<h1>Welcome</h1>)} exact/>
        <Route path='/app' component={App} />
      </Router>
    </BeerDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);