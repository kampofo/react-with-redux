import React, { Component } from "react";

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "",
            height: "",
            color: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // handles changing input from input fields
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    // handles form submission
    handleSubmit(event) {
        event.preventDefault();
        this.props.create(this.state);
        this.setState({
            width: "",
            height: "",
            color: "",
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} action="">
                <label htmlFor="width">Width: </label>
                <input
                    type="text"
                    name="width"
                    id="width"
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <br />

                <label htmlFor="height">Height: </label>
                <input
                    type="text"
                    name="height"
                    id="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <br />

                <label htmlFor="color">Color: </label>
                <input
                    type="text"
                    name="color"
                    value={this.state.color}
                    id="color"
                    onChange={this.handleChange}
                />
                <br />
                <button>Submit</button>
            </form>
        );
    }
}

export default NewBoxForm;
