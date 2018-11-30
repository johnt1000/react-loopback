import React from "react";
import { Switch, Route } from "react-router-dom";
import CoffeShop from './CoffeShop';
import Login from './Login';
import Signup from './Signup';
import Review from './Review';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={CoffeShop} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/review/:id' component={Review} />
        </Switch>
    </main>
)

export default Main;