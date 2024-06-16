
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcomemessage from "./components/Welcomemessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate, itemDueTime) => {
    console.log(
      "New Item Added: ${itemName} Date:${itemDueDate} Time:$(itemDueTime)"
    );
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate, dueTime: itemDueTime },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log("item deletd:${todoItemName}");
  };
  return (
    <center className="">
      
      <h1 class="AppName">Todo List App</h1>
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcomemessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
