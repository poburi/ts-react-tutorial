import React, { useRef } from "react";
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
import { useTodosDispatch, Todo } from "./contexts/TodosContext";

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => (e: any) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      todo.done = true;
    } else {
      newChecked.splice(currentIndex, 1);
      todo.done = false;
    }

    setChecked(newChecked);
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id,
    });
  };

  return (
    <Item
      className={`TodoItem ${todo.done ? "done" : ""}`}
      key={todo.id}
      role={undefined}
      dense
      button
      onClick={handleToggle(todo.id)}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked.indexOf(todo.id) !== -1}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText
        id={`checkbox-list-label-${todo.id}`}
        primary={`${todo.text}`}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </Item>
  );
}
const Item = styled(ListItem)`
  &.done,
  &.done span {
    text-decoration: line-through;
  }
  &:hover {
    text-decoration: inherit !important;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default TodoItem;
