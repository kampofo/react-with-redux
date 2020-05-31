import React, { Component } from "react";

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>
                    Hi {this.props.to} from {this.props.from}
                </h1>
            </div>
        );
    }
}

export default Hello;
