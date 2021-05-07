import React from "react";
import HomePage from "./homePage/HomePage";
import { Switch, Route } from "react-router-dom";
import Ofertas from "./articulos/Ofertas";
import TransactionLog from "./adminPanel/TransactionLog";
import ProductPanel from "./adminPanel/ProductPanel";
import ListaArticulos from "./articulos/ListaArticulos";
import Carrito from "./articulos/Carrito";
import ProductDetails from "./articulos/ProductDetails";
import {Redirect} from "react-router";

export default function MainContent(props){
 return (
   <div className={"mainContent"}>
       <Switch>
           <Route exact path="/">
               <HomePage />
           </Route>
           <Route path="/articulos/:category">
               <ListaArticulos />
           </Route>
           <Route path="/ofertas">
               <Ofertas />
           </Route>
           <Route path="/transacciones">
               <TransactionLog isLoggedIn={props.isLoggedIn}/>
           </Route>
           <Route path="/gestionProductos">
               <ProductPanel isLoggedIn={props.isLoggedIn}/>
           </Route>
           <Route path="/carrito" >
                <Carrito />
           </Route>
           <Route path="/producto/:id">
               <ProductDetails/>
           </Route>
           <Redirect to={"/"} />
       </Switch>
   </div>
 );
}