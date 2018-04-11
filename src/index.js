import React from "react";
import { render } from "react-dom";
import TextBox from "./Components/TextBox";
import Button from "./Components/Button";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <TextBox />
    <br />
    <Button />
    <br />
  </div>
);

render(<App />, document.getElementById("root"));
