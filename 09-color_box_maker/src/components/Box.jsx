import React, { Component } from "react";

class Box extends Component {
    render() {
        return (
            <div
                style={{
                    display: "inline-block",
                    width: `${this.props.width}px`,
                    height: `${this.props.height}px`,
                    backgroundColor: this.props.color,
                }}
            ></div>
        );
    }
}

export default Box;
