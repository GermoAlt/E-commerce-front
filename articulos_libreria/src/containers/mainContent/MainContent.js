import React from "react";
import HomePage from "./homePage/HomePage";
import { Switch, Route } from "react-router-dom";
import Ofertas from "./homePage/Ofertas";
import TransactionLog from "./adminPanel/TransactionLog";
import ProductPanel from "./adminPanel/ProductPanel";
import ListaArticulos from "./articulos/ListaArticulos";
import Carrito from "./articulos/Carrito";

export default function MainContent(props){
 return (
   <div className={"mainContent"}>
       <Switch>
           <Route exact path="/">
               <HomePage />
           </Route>
           <Route path="/articulos" component={ListaArticulos}/>
           <Route path="/ofertas">
               <Ofertas />
           </Route>
           <Route path="/transacciones">
               <TransactionLog />
           </Route>
           <Route path="/gestionProductos">
               <ProductPanel />
           </Route>
           <Route path="/carrito" component={Carrito}/>
       </Switch>
   </div>
 );
}