import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import styled from "styled-components";
import { useTodosDispatch } from "./contexts/TodosContext";
import { useTodosState } from "./contexts/TodosContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();
  const state = useTodosState();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      text: value,
    });
    setValue("");
  };
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <TodoInput
        placeholder="오늘의 할 일"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TodoButton
        onClick={onSubmit}
        variant="contained"
        size="small"
        color="primary"
      >
        등록
      </TodoButton>
    </form>
  );
}
const TodoInput = styled(Input)`
  width: 350px;
  margin-right: 20px;
`;
const TodoButton = styled(Button)`
  margin-left: 80px;
`;
export default TodoForm;
