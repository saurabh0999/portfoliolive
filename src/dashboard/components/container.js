import { useRouteMatch, Route, Switch } from 'react-router-dom';
import Contact from './contact/contact';
import About from "./about/about";
import Testimonials from "./testimonials/testimonials";
import Experience from "./experience/experience";
import Main from "./main/main";

function Container() {
   const {path, url} = useRouteMatch();
   return (
     <>
        <Switch>
            <Route exact path={`${path}/`} component={Main}/>
            <Route path={`${path}/main`} component={Main}/>  
            <Route path={`${path}/contact`} component={Contact}/>  
            <Route path={`${path}/about`} component={About}/>
            <Route path={`${path}/testimonials`} component={Testimonials}/>
            <Route path={`${path}/experience`} component={Experience}/>
        </Switch>
     </>
   );
}

export default Container;
