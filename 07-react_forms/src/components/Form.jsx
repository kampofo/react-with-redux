import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(`You typed: ${this.state.username}`);
        this.setState({ username: "" });
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit} action="">
                    <input
                        type="text"
                        name="username"
                        id=""
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Submit!</button>
                </form>
            </div>
        );
    }
}

export default Form;
