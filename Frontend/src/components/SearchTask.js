import React, { useState } from "react";

const SearchTask = () => {
    const [taskId, setTaskId] = useState("");
    const [todo, setTodo] = useState(null);
    const [taskNotFound, setTaskNotFound] = useState(false);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:3500/tasks/${taskId}`);
            const data = await response.json();
                if (data.length > 0) {
                    // Assuming the response is an array, take the first element
                    setTodo(data[0]);
                    setTaskNotFound(false);
                } else {
                    // No task found with the given ID
                    setTodo(null);
                    setTaskNotFound(true);
                }
            } catch (error) {
            console.error(error.message);
            setTodo(null);
            setTaskNotFound(true);
            }
    };

return (
        <div class="container-fluid">
            <div class="row mt-2">
                <div class="col-12 col-md-8 col-lg-6 col-xl-4 mx-auto">
                    <label htmlFor="taskId" className="d-flex mt-5 gap-2">
                        <input
                            type="text"
                            className="form-control"
                            id="taskId"
                            placeholder="Task ID"
                            value={taskId}
                            onChange={(e) => setTaskId(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={handleSearch}
                            data-bs-toggle={todo || taskNotFound ? "modal" : ""}
                            data-bs-target={todo || taskNotFound ? "#searchTaskModal" : ""}
                            disabled={!taskId.trim()}
                        >
                            Search
                        </button>
                    </label>

                    <div className="modal " id="searchTaskModal" >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content rounded-4 shadow ">
                                <div className="modal-header">
                                    <h5 className="modal-title">Task Details</h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                </div>
                                <div className="modal-body">
                                    {taskNotFound ? (
                                    <p>Task not found.</p>
                                    ) : (
                                        <div>
                                            <p><strong>ID: </strong>{todo?.id}</p>
                                            <p><strong>Description: </strong>{todo?.description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default SearchTask;
