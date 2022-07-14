import React from "react";
import { AddTodo } from "../addTodo/AddTodo";
import { ShowTodo } from "../showTodo/ShowTodo";
import "./Home.css";

export const Home = () => {
  return (
    <div className="homeContainer">
      <AddTodo />
      <ShowTodo />
    </div>
  );
};
