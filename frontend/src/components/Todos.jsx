import React from 'react';
import '../App.css'; // Import the CSS file

export const Todos = ({ todos }) => {
    return (
        <div className="todos-container">
            {
                todos.map((todo, index) => {
                    return (
                        <div className="todo-card" key={index}>
                            <h1 className="todo-title">{todo.title}</h1>
                            <h2 className="todo-description">{todo.description}</h2>
                            <button className="todo-button">
                                {todo.completed === true ? "Completed" : "Mark as completed"}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
}
