import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import React from "react";
import PrimeReact from 'primereact/api';
import { ScrollTop } from 'primereact/scrolltop'

import Header from "./containers/header/header";
import { BrowserRouter as Router } from "react-router-dom";

import MainContent from "./containers/mainContent/mainContent";

import { Provider } from './AppContext'

export default function App() {

    PrimeReact.ripple = true;
  return (
      <div className="App">

          <Provider>
            <Router>
              <ScrollTop/>
              <Header/> 
              <MainContent/>
            </Router>
          </Provider>
      </div>
  );
}

