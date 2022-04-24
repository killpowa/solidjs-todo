import { Component, createEffect, For, untrack } from "solid-js";

import styles from "./App.module.scss";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import Footer from "./components/Footer";
import { tasks, setTasks } from "./store";
import { produce } from "solid-js/store";

const App: Component = () => {
  createEffect(() => {
    console.log(untrack(() => tasks?.todo)?.[0]?.done);
  });
  return (
    <div class={styles.container}>
      <Navbar />
      <div class={styles.content}>
        <div>
          <TodoInput />
          <div class={styles.tasksList}>
            <For each={tasks.todo}>
              {(task) => (
                <div
                  onClick={() => {
                    const t = tasks.todo.findIndex((t) => t.name === task.name);
                    setTasks(
                      "todo",
                      produce((ts) => {
                        ts[t].done = !ts[t].done;
                      })
                    );
                  }}
                >
                  <span
                    class={styles.deleteIcon}
                    onClick={(e) => {
                      e.stopPropagation();
                      const t = tasks.todo.findIndex(
                        (t) => t.name === task.name
                      );
                      setTasks(
                        "todo",
                        produce((ts) => ts.splice(t, 1))
                      );
                    }}
                  >
                    -
                  </span>
                  {task.name} {task.done ? "✅" : "❌"}
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
