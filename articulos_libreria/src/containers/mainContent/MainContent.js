import HomePage from "./homePage/HomePage";
import { Switch, Route } from "react-router-dom";
import Ofertas from "./homePage/Ofertas";
import TransactionLog from "./adminPanel/TransactionLog";
import ProductPanel from "./adminPanel/ProductPanel";

export default function MainContent(props){
 return (
   <div className={"mainContent"}>
       <Switch>
           <Route exact path="/">
               <HomePage />
           </Route>
           <Route path="/ofertas">
               <Ofertas />
           </Route>
           <Route path="/transacciones">
               <TransactionLog />
           </Route>
           <Route path="/gestionProductos">
               <ProductPanel />
           </Route>
       </Switch>
   </div>
 );
}