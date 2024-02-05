import React, { Fragment, useState } from "react";

const EditTask = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      console.log(todo)
      const response = await fetch(
        `http://localhost:3500/tasks/${todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      window.location = "/";

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.id}`}
      >
        Edit
      </button>
    <div 
        class="modal"  
        id={`id${todo.id}`}
        onClick={() => setDescription(todo.description)}>
    
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5">Edit Todo</h1>
                    <button 
                        type="button" 
                        class="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        onClick={() => setDescription(todo.description)}
                        >
                    </button>
                </div>

                <div class="modal-body py-0">
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                </div>

                <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                    <button 
                        type="button" 
                        class="btn btn-lg btn-primary"
                        data-bs-dismiss="modal"
                        onClick={e => updateDescription(e)}
                        >Save changes
                        </button>

                    <button 
                        type="button" 
                        class="btn btn-lg btn-secondary" 
                        data-bs-dismiss="modal"
                        onClick={() => setDescription(todo.description)}
                        >Close
                        </button>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
  );
};

export default EditTask;

