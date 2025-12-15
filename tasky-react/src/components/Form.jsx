import React from "react";

const AddTaskForm = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
          Task title:
          <input
            type="text"
            name="title"
            required
            onChange={(event) => props.change(event)}
          />
        </label>
        <br />

        <label>
          Due date:
          <input
            type="date"
            name="deadline"
            required
            onChange={(event) => props.change(event)}
          />
        </label>
        <br />

        <label>
          Details:
          <input
            type="text"
            name="description"
            onChange={(event) => props.change(event)}
          />
        </label>
        <br />
        <label>
          Priority:
          <input
            type="text"
            name="priority"
            list="priorityOptions"
            onChange={(event) => props.change(event)}
          />
          <datalist id="priorityOptions">
            <option value="Low" />
            <option value="Medium" />
            <option value="High" />
          </datalist>
        </label>
        <br />

        <input type="submit" value="Submit" className="submitButton" />
      </form>
    </div>
  );
};

export default AddTaskForm;

