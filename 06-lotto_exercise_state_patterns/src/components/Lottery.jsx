import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        numBalls: 6,
        maxNum: 40,
    };

    constructor(props) {
        super(props);
        // Creates empty arr the size of numBalls
        this.state = { nums: Array.from({ length: this.props.numBalls }) };
        this.handleClick = this.handleClick.bind(this);
    }

    // method to be called within handle click
    generate() {
        this.setState((curState) => ({
            nums: curState.nums.map(
                // Generates a random number for every ball
                (n) => Math.floor(Math.random() * this.props.maxNum) + 1
            ),
        }));
    }

    handleClick() {
        // Handler is called when generate button is clicked
        this.generate();
    }

    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map((n) => (
                        <Ball num={n} />
                    ))}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        );
    }
}

export default Lottery;
