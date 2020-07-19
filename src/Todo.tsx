import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTodosState } from "./contexts/TodosContext";

function Todo() {
  const classes = useStyles();
  const todos = useTodosState();
  // console.log(todos, "todos");
  return (
    <>
      <TodoForm />
      <List className={classes.root}>
        {todos.length > 0 &&
          todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
      </List>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default Todo;
