import React from "react";

export default ({ todos }) => (
  <div className="lists">
    <ul style={{ listStyleType: "none" }}>
      {todos.map(todo => <li>{todo}</li>)}
    </ul>
  </div>
);
