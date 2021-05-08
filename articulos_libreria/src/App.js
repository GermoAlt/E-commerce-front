import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import React, {useState} from "react";
import PrimeReact from 'primereact/api';
import { ScrollTop } from 'primereact/scrolltop'
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./containers/header/Header";
import MainContent from "./containers/mainContent/MainContent";


import { Provider } from './AppContext'
import Footer from "./containers/footer/footer";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    PrimeReact.ripple = true;
  return (
      <div className="App">

          <Provider>
            <Router>
              <ScrollTop/>
              <Header isLoggedIn={isLoggedIn} setIsLoggedIn={(value) => setIsLoggedIn(value)}/>
              <MainContent isLoggedIn={isLoggedIn}/>
            </Router>
          </Provider>

      </div>
  );
}

