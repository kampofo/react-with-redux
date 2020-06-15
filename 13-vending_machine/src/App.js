import React, { Component } from "react";
import Chips from "./components/Chips";
import VendingMachine from "./components/VendingMachine";
import Soda from "./components/Soda";
import Sardines from "./components/Sardines";

import { Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <VendingMachine />} />
                    <Route exact path="/soda" render={() => <Soda />} />
                    <Route exact path="/chips" render={() => <Chips />} />
                    <Route exact path="/sardines" render={() => <Sardines />} />
                </Switch>
            </div>
        );
    }
}

export default App;
