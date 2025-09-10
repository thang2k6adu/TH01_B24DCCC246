// HomePage.js
import React from "react";
import Counter from "../../components/Counter/Counter";
import TodoApp from "../../components/Todo/Todo";
import ColorBoxApp from "../../components/ColorBox/ColorBoxApp";
import { StudentList } from "../../components/StudentList/StudentList";
import Clock from "../../components/Clock/Clock";
import "../../styles/css/homePage.css";

export const HomePage = () => {
  return (
    <>
      {/* Floating shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <Counter />
      <TodoApp />
      <ColorBoxApp />
      <StudentList />
      <Clock />
    </>
  );
}
