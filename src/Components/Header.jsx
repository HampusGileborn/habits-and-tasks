import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="headline" to={"/"}><h1>JH Tasks & Habits Page</h1></Link>
      <nav className="navbar">
        <Link to={"/Tasks"}>Tasks</Link>
        <Link to={"/NewTask"}>New Task</Link>
        <Link to={"/Habits"}>Habits</Link>
        <Link to={"/NewHabit"}>New Habit</Link>
        {/* <Link to={"/Friends"}>Friends</Link> */}
      </nav>
    </div>
  );
}

export default Header;
