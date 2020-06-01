import React, { Component } from "react";
import Lottery from "./components/Lottery";
class App extends Component {
    render() {
        return (
            <div>
                <Lottery />
                <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
            </div>
        );
    }
}

export default App;
