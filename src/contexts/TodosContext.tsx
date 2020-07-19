import React, { createContext, Dispatch, useReducer, useContext } from "react";

export type Todo = {
  id: number;
  text: any;
  done: boolean;
};

type TodosState = Todo[];

const TodosStateContext = createContext<TodosState | undefined>(undefined);

type Action =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(0, ...state.map((todo) => todo.id)) + 1;

      let todoList: any = localStorage.getItem("todo");

      if (todoList) {
        todoList = JSON.parse(todoList);
      } else {
        todoList = [];
      }

      const data = {
        id: nextId,
        text: action.text,
        done: false,
      };

      todoList.push(data);

      localStorage.setItem("todo", JSON.stringify(todoList));
      return state.concat({
        id: nextId,
        text: action.text,
        done: false,
      });
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      let todolist: any = localStorage.getItem("todo");

      todolist = JSON.parse(todolist);
      todolist = todolist.filter((item: any) => item.id !== action.id);

      localStorage.setItem("todo", JSON.stringify(todolist));
      //   const aa = state.filter((todo) => todo.id !== action.id);
      //   console.log(aa);
      //   localStorage.setItem('todo', aa)

      return todolist;
    default:
      throw new Error("Unhandled action");
  }
}

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const todoList: any = localStorage.getItem("todo");
  const [todos, dispatch] = useReducer(todosReducer, JSON.parse(todoList));

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export function useTodosState() {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider not found");
  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider not found");
  return dispatch;
}
