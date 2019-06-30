import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return <h1>{props.name}</h1>;
};

const Part = props => {
  return (
    <p>
      {props.class[0]} {props.class[1]}
    </p>
  );
};

const Content = props => {
  return (
    <div>
      <Part class={props.classes[0]} />
      <Part class={props.classes[1]} />
      <Part class={props.classes[2]} />
    </div>
  );
};

const Total = props => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = "Half stack application development";
  const classes = [
    ["Fundamentals of react", 10],
    ["Using props to pass data", 7],
    ["State of a component", 14]
  ];
  return (
    <div>
      <Header name={course} />
      <Content classes={classes} />
      <Total total={classes[0][1] + classes[1][1] + classes[2][1]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
