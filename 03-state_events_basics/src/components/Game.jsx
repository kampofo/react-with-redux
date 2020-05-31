import React, { Component } from "react";
import Rando from "./Rando";
import Button from "./Button";

class Game extends Component {
    render() {
        return (
            <div>
                <Rando maxNum={7} />
                <Button />
            </div>
        );
    }
}

export default Game;
