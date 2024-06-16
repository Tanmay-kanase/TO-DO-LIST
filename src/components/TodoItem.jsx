import "./Main.css";
function TodoItem({ todoDate, todoName, todoTime, onDeleteClick }) {
  return (

    <div class="Todo-Items">

      <div class="todo-align todo-name">
        <input type="text" value={todoName} />
      </div>
      <div class="todo-align todo-date">
        <input type="text" value={todoDate} /></div>
      <div class="todo-align todo-time"><input type="text" value={todoTime} /></div>
      <div class="todo-align todo-buton">
        <button
          type="button"
          class="todo-button"
          onClick={() => onDeleteClick(todoName)}
        >
          Delete
        </button>
      </div>
    </div>

  );
}

export default TodoItem;
