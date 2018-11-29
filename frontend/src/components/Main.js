import React from "react";
import { Switch, Route } from "react-router-dom";
import CoffeShop from './CoffeShop';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={CoffeShop} />
        </Switch>
    </main>
)

export default Main;