import { useState } from "react";
import "./Main.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setDueTime(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate, dueTime);
    setDueDate("");
    setTodoName("");
    setDueTime("");
  };

  return (
    <div class="Container">

      <div class="To-do">
        <input
          type="text"
          class=""
          placeholder="Enter todo here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div class="date">
        <input type="date" value={dueDate} onChange={handleDateChange} />
      </div>
      <div class="time">
        <input type="time" value={dueTime} onChange={handleTimeChange} />
      </div>

      <div class="button">
        <button type="button" class="" onClick={handleAddButtonClicked}>
          Add
        </button>
      </div>

    </div>
  );
}

export default AddTodo;
