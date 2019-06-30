import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  console.log(props);
  return <h1>{props.name}</h1>;
};

const Part = props => {
  console.log(props);
  return (
    <p>
      {props.class["name"]} {props.class["exercises"]}
    </p>
  );
};

const Content = props => {
  return (
    <div>
      <Part class={props.course.parts[0]} />
      <Part class={props.course.parts[1]} />
      <Part class={props.course.parts[2]} />
    </div>
  );
};

const Total = props => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
        name: "Fundamentals of react",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header name={course.name} />
      <Content course={course} />
      <Total
        total={
          course["parts"][0]["exercises"] +
          course["parts"][1]["exercises"] +
          course["parts"][2]["exercises"]
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
