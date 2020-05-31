import React, { Component } from "react";
import SlotsDisplay from "./SlotsDisplay";

function getSlot() {
    return Math.floor(Math.random() * 3);
}

function buildSlots() {
    var fruits = ["🍊", "🍇", "🍒"];
    var slots = [fruits[getSlot()], fruits[getSlot()], fruits[getSlot()]];
    return slots;
}

function getResults(slotsArr) {
    if (slotsArr[0] === slotsArr[1] && slotsArr[1] === slotsArr[2]) {
        return "you win!";
    }
    return "you lose!";
}

class App extends Component {
    render() {
        var slots = buildSlots();

        return (
            <div>
                <h1>Slot Machines!</h1>
                <SlotsDisplay s1={slots[0]} s2={slots[1]} s3={slots[2]} />
                <p>{getResults(slots)}</p>
            </div>
        );
    }
}

export default App;
