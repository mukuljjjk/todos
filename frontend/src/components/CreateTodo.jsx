import React, { useState } from 'react';
import '../App.css';

export const CreateTodo = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="create-todo-container" style={{ marginBottom: '25px' }}>
            <div className="input-field">
                <input type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="input-field">
                <input type='text' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="input-field">
                <button onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then(async (res) => {
                        const json = await res.json();
                        alert('todo added')
                    })
                }}>Add a todo</button>
            </div>
        </div>
    );
}