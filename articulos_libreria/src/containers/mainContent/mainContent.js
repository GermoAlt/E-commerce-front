import HomePage from "./homePage/homePage";
import ListaArticulos from "./articulos/listaArticulos";
import Carrito from "./articulos/carrito.js";
import {Route, useHistory } from "react-router-dom";


export default function MainContent(){
 return (
   <div className={"mainContent"}>
      <Route path="/" exact component={HomePage} />
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/about">
          <ListaArticulos />
      </Route>
      <Route path="/users">
          <HomePage />
      </Route>
      <Route path="/articulos" component={ListaArticulos}/>
      <Route path="/carrito/:id?" component={Carrito}/>
   </div>
 );
}