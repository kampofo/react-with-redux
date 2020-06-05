import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task,
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing,
        });
    }

    handleUpdate(event) {
        event.preventDefault();
        // take updated task data and pass up to parent component
        this.props.updateTodo(this.props.id, this.state.task);
        this.toggleForm();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        let result;

        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            name="task"
                            id="task"
                            onChange={this.handleChange}
                            value={this.state.task}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <li>
                    {this.props.task}
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>x</button>
                </li>
            );
        }
        return result;
    }
}

export default Todo;
