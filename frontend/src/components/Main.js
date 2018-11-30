import React from "react";
import { Switch, Route } from "react-router-dom";
import CoffeShop from './CoffeShop';
import Login from './Login';
import Signup from './Signup';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={CoffeShop} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
        </Switch>
    </main>
)

export default Main;