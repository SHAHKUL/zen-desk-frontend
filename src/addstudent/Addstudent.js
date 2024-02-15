import React from "react";
import "./student.css";
import { Link } from "react-router-dom";

function Addstudent() {
  return (
    <div style={{ display: "flex" }}>
      <Link className="add" to={"/home/addStudent/add"}>
        <div>
          <h1 id="head">Add Student</h1>
        </div>
      </Link>
      <Link className="add" to={"/home/addStudent/update"}>
        <div>
          <h1 id="head">Update Student</h1>
        </div>
      </Link>
      <Link className="add" to={"/home/addStudent/delete"}>
        <div>
          <h1 id="head">Delete Student</h1>
        </div>
      </Link>
    </div>
  );
}

export default Addstudent;
