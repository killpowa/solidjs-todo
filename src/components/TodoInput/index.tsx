import { Component, createSignal } from "solid-js";
import { setTasks, tasks } from "../../store";
import styles from "./TodoInput.module.scss";

const TodoInput: Component = () => {
  let input: HTMLInputElement;

  function addTask() {
    setTasks("todo", tasks.todo.length, { name: input.value, done: false });
    input.value = "";
    input.focus();
  }

  return (
    <div class={styles.container}>
      <input
        ref={input!}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        type="text"
        placeholder="Type a task"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default TodoInput;
