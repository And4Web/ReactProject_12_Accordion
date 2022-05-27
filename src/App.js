import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Questions and Answers</h1>
      {data.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </div>
  );
}

export default App;
