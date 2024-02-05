import React, { Fragment, useState } from "react";

const InputTask = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
        const body = { description };
        const response = await fetch("http://localhost:3500/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
        });
        console.log(response)
        window.location = "/";
        
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
        <div class="container-fluid">
            <div class="row mt-2">
                <div class="col-12 col-md-8 col-lg-6 col-xl-4 mx-auto">
                    <form className="d-flex mt-3 gap-2" onSubmit={onSubmitForm}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="New Task"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="submit" disabled={!description.trim()}>
                            Add
                        </button>
                    </form>
                </div> 
            </div>
        </div>
    </Fragment>
  );
};

export default InputTask;