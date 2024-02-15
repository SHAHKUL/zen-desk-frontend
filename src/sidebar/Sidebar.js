import React from "react";
import "./Side.css";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { SiCrowdsource } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { MdPersonSearch } from "react-icons/md";

function Sidebar() {
  const { admin } = useSelector((state) => state.auth);
  return (
    <div className="navigation">
      <ul>
        <li className="list " id="act">
          <Link to={"/home"}>
            <span className="icon">
              <i className="fa-solid fa-house-chimney"></i>
            </span>
            <span className="title">Home</span>
          </Link>
        </li>
        <li className="list">
          <Link to={"/home/profile"}>
            <span className="icon">
              <i className="fa-solid fa-user"></i>
            </span>
            <span className="title">Profile</span>
          </Link>
        </li>
        <li className="list">
          <Link to={"/home/dash"}>
            <span className="icon">
              <AiFillDashboard />
              <i className="fa-solid fa-grid-horizontal"></i>{" "}
            </span>

            <span className="title">Dashboard</span>
          </Link>
        </li>
        <li className="list">
          <Link to={"/home/task"}>
            <span className="icon">
              <i className="fa-solid fa-list-check"></i>
            </span>
            <span className="title">Assingment</span>
          </Link>
        </li>

        {admin ? (
          <li className="list">
            <Link to={"/home/addStudent"}>
              <span className="icon">
                <SiCrowdsource />
              </span>
              <span className="title">Add Stuent</span>
            </Link>
          </li>
        ) : null}
        {admin ? (
          <li className="list">
            <Link to={"/home/addAdmin"}>
              <span className="icon">
                <RiAdminFill />
              </span>
              <span className="title">Add Admin</span>
            </Link>
          </li>
        ) : null}
        {admin ? (
          <li className="list">
            <Link to={"/home/addClass"}>
              <span className="icon">
                <i className="fa-solid fa-landmark"></i>
              </span>
              <span className="title">Add Class</span>
            </Link>
          </li>
        ) : null}

        {admin ? (
          <li className="list">
            <Link to={"/home/goToClass"}>
              <span className="icon">
                <MdOutlineContentPasteSearch />
              </span>
              <span className="title">Go to Class</span>
            </Link>
          </li>
        ) : null}
        {admin ? (
          <li className="list">
            <Link to={"/home/studentList"}>
              <span className="icon">
                <MdPersonSearch />
              </span>
              <span className="title">Student List</span>
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default Sidebar;
