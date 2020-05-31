import React, { Component } from "react";
import Hello from "./Hello";
class App extends Component {
    render() {
        return (
            <div>
                <Hello to="carl" from="kyle" />
                <Hello to="ringo" from="paul" />
            </div>
        );
    }
}

export default App;
