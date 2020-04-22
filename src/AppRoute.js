import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Favourite from './components/content/favourite/favourite';
import Home from './components/content/home/home';
import Classification from './components/content/classification/classification';
import NotFound from './components/notFound/notFound';
const AppRoute=()=>{
    return(
        <React.Fragment>
           <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/favourite" component ={Favourite}/>
            <Route path="/classification" component ={Classification}/>
            <Route component={NotFound}/>
        </Switch>
        </React.Fragment>
    )
}

export default AppRoute