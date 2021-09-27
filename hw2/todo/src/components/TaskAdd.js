import React, { useState } from "react";

// Компонента отвечает за ввод новых заданий. 

function TaskAdd(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name, description);
    setName("");
    setDescription("");
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDes(e) {
    setDescription(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What's need to be done?!
        </label>
      </h2>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Name
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChangeName}
      />
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Description
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        description="text"
        autoComplete="off"
        value={description}
        onChange={handleChangeDes}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default TaskAdd;
