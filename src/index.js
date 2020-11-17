import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'

import App from './components/app';
import './index.css';

import store from "./store";
import {BeerDataProvider} from "./components/beer-api-context";

ReactDOM.render(
  <Provider store={store}>
    <BeerDataProvider value={'test'}>
      <Router>
        <App/>
      </Router>
    </BeerDataProvider>
  </Provider>,
  document.getElementById('root')
);