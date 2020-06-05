import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
        };
        this.create = this.create.bind(this);
    }

    // adds new color box oject to boxes array
    create(boxObject) {
        // assign new box info here including id before adding to boxes arr
        let newBox = { ...boxObject, id: uuid() };
        this.setState((prevState) => ({
            boxes: [...prevState.boxes, newBox],
        }));
    }

    render() {
        return (
            <div>
                <h1>Box List</h1>
                <NewBoxForm create={this.create} />
                {console.log(this.state.boxes)}
                {this.state.boxes.map((box) => (
                    <Box
                        key={box.id}
                        width={box.width}
                        height={box.height}
                        color={box.color}
                    />
                ))}
            </div>
        );
    }
}

export default BoxList;
