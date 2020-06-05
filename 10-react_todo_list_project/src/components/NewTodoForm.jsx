import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: "", id: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let newTodoObj = { ...this.state, id: uuid() };
        this.props.createTodo(newTodoObj);
        this.setState({
            todo: "",
            id: null,
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    <button>ADD TODO</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;
