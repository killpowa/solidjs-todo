import { createStore } from "solid-js/store";

type Todo = {
  todo: {
    name: string;
    done: boolean;
  }[];
};

export const [tasks, setTasks] = createStore<Todo>({ todo: [] });
