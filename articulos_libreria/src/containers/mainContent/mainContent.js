import HomePage from "./homePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function MainContent(){
 return (
   <div className={"mainContent"}>
       <Switch>
           <Route path="/about">
               <HomePage />
           </Route>
           <Route path="/users">
               <HomePage />
           </Route>
           <Route path="/">
               <HomePage />
           </Route>
       </Switch>
   </div>
 );
}