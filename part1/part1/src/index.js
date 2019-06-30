import React from "react";
import ReactDOM from "react-dom";

const Hello = props => {
  return (
    <div>
      <p>
        Hello, {props.name} you are {props.age} years old!
      </p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  console.log("Hello from component");
  return (
    <div>
      <p>Hello, world it is {now.toString()}</p>
      <Hello name="Greg" age={14} />
      <Hello name="Kelly" age={5} />
    </div>
  );
};
// render (this thing, in this place)
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
