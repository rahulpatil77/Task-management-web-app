import React, { Fragment, useEffect, useState } from "react";

import EditTask from "./EditTask";

const ListTasks = () => {
    const [todos, setTodos] = useState([]);

  //delete todo function

    const deleteTodo = async id => {

        try {
            const deleteTodo = await fetch(`http://localhost:3500/tasks/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.id !== id));
        } catch (err) {
        console.error(err.message);
        }
    };

    const getTodos = async () => {
        try {
        const response = await fetch("http://localhost:3500/tasks");
        const jsonData = await response.json();

        setTodos(jsonData);
        } catch (err) {
        console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);


    return (
        <Fragment>
        <div className="container-fluid">
            <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-4 mx-auto">
                <div className="list-group list-group-checkable d-grid gap-2 border-0">
                {todos.map(todo => (
                    <div key={todo.id}>
                    <label
                        className="list-group-item rounded-3 py-3 bg-primary-border-subtle text-dark d-flex gap-3"
                        htmlFor={`listGroupCheckableRadios${todo.id}`}
                    >
                        <span className="pt-1 form-checked-content">
                        <strong>{todo.description}</strong>
                        </span>
                        <span className="ms-auto">
                        <EditTask todo={todo} />
                        </span>
                        <span>
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                        </span>
                    </label>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </Fragment>
    );
};


export default ListTasks;
