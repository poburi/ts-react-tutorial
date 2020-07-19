import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/study">Study</Link>
        </li>
        <li>
          <Link to="/todolist">TodoList</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
