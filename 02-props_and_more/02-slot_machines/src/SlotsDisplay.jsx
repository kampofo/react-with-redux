import React, { Component } from "react";
import Slot from "./Slot";

class SlotsDisplay extends Component {
    
    
    render() {
        return (
            <div>
                <Slot fruit={this.props.s1} />
                <Slot fruit={this.props.s2} />
                <Slot fruit={this.props.s3} />
            </div>
        );
    }
}

export default SlotsDisplay;
