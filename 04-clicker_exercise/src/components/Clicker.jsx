import React, { Component } from "react";

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // generate random number between 1 and 10
        this.setState({ num: Math.ceil(Math.random() * 10) });
    }

    render() {
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                {this.state.num !== 7 ? (
                    <button onClick={this.handleClick}>Random Number</button>
                ) : (
                    <p>You win!!!</p>
                )}
            </div>
        );
    }
}

export default Clicker;
