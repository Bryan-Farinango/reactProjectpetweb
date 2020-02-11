import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";

import EventsForm from "./components/EventsForm";
import Navbar from "./containers/navbar";
import UserForm from "./components/UserForm";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Navbar}/>
            <Route path="/home" component={Home}/>
            <Route path="/Eventos" component={EventsForm}/>
            <Route path="/Usuarios" component={UserForm}/>
        </Switch>

    );
}

export default Routes;