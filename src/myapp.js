import Home from "./home";
import Login from "./dashboard/common/login";
// import {useSelector, useDispatch} from 'react-redux'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./dashboard/dashboard";

function Myapp() {
  return (
    <>
        
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>  
            <Route path="/dashboard/Login" component={Login}/>  
            <Route path="/dashboard" component={Dashboard}/>  
          </Switch>
          
    </>
  );
}

export default Myapp;
