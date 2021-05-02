import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import React from "react";
import PrimeReact from 'primereact/api';
import { ScrollTop } from 'primereact/scrolltop'

import Header from "./containers/header/Header";
import MainContent from "./containers/mainContent/mainContent";

export default function App() {
    PrimeReact.ripple = true;
  return (
    <div className="App">
      <ScrollTop/>
      <Header/>
      <MainContent/>
    </div>
  );
}

