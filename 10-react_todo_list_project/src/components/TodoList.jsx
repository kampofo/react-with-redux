import React, { Component } from "react";

import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.createTodo = this.createTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    // adding new task to todolist array
    createTodo(todoObj) {
        this.setState((prevState) => ({
            todos: [...prevState.todos, todoObj],
        }));
    }

    // edit/update task from todolist array
    updateTodo(id, updatedTask) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, todo: updatedTask };
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos,
        });
    }

    // remove task from todoList array
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id),
        });
    }

    render() {
        const todos = this.state.todos.map((todo) => (
            <Todo
                key={todo.id}
                id={todo.id}
                task={todo.todo}
                removeTodo={this.removeTodo}
                updateTodo={this.updateTodo}
            />
        ));
        return (
            <div className="TodoList">
                <h1>TodoList</h1>
                <ul>{todos}</ul>
                <NewTodoForm createTodo={this.createTodo} />
            </div>
        );
    }
}

export default TodoList;
