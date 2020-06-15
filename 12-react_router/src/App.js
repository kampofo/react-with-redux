import React, { Component } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Dog from "./components/Dog";
import { Route, NavLink, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink exact to="/">
                        About
                    </NavLink>
                    <NavLink exact to="/dog">
                        Dog
                    </NavLink>
                    <NavLink exact to="/contact">
                        Contact
                    </NavLink>
                </nav>
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/dog" component={Dog} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>
        );
    }
}

export default App;
