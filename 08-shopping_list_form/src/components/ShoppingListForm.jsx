import React, { Component } from "react";

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            qty: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addItem(this.state);
        this.setState({ name: "", qty: "" });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} action="">
                    {/* Input for name field */}
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Enter item name"
                    />
                    {/* Input for quantity field */}
                    <label htmlFor="qty"></label>
                    <input
                        type="text"
                        name="qty"
                        id="qty"
                        value={this.state.qty}
                        onChange={this.handleChange}
                        placeholder="Enter item quantities"
                    />
                    <button>Add Item</button>
                </form>
            </div>
        );
    }
}

export default ShoppingListForm;
