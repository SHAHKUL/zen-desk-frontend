import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./header.css";
import { logout } from "../redux/authSlice";
import { removeClass } from "../redux/classSlice";
import axios from "axios";
import Url from "../Url";

function Header() {
  const [notifi, setNotify] = useState(false);

  const { batch } = useSelector((state) => state.auth);
  const { batche } = useSelector((state) => state.classDay);
  const { classId } = useSelector((state) => state.classDay);
  const { user } = useSelector((state) => state.auth);
  const { admin } = useSelector((state) => state.auth);
  const { nameAdmin } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  const { zenclass } = useSelector((state) => state.auth);
  var len = zenclass ? zenclass.length : null;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeClass());
    dispatch(logout());
    navigate("/");
  };

  const handleEdit = () => {
    if (len == null) return;
    if (classId == null) return;
    navigate(`/home/editClass/${classId}`);
  };

  const handleDelete = async () => {
    if (len == null) return;
    if (classId == null) return;
    else {
      await axios.delete(`${Url}/class/remove/${classId}`, {
        headers: {
          auth: token,
        },
      });

      setNotify(true);
    }
  };

  return (
    <div
      id="top"
      className="row"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="col-lg-4">
        <span style={{ display: "flex" }} className="button-90">
          <p>Batch: </p>

          <p style={{ marginLeft: "10px" }}>
            {" "}
            {batch ? batch.toUpperCase() : "No Batch"}
          </p>

          {batche && <h3 style={{ marginLeft: "10px" }}> {batche}</h3>}
        </span>
      </div>
      <div
        id="student"
        className="col-lg-8"
        style={{ justifycontent: "flex-end" }}
      >
        <div className="row">
          <div className="col-lg-9">
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="button-90" style={{ display: "flex" }}>
                <h3> Name:</h3>
                <h3 style={{ marginLeft: "10px" }}>
                  {user.name ? user.name.toUpperCase() : null}
                </h3>
              </span>
              {admin && (
                <span>
                  <h3 className="button-29">
                    {nameAdmin ? nameAdmin.toUpperCase() : null} (admin)
                  </h3>
                  <button
                    className="button-28"
                    style={{ marginRight: "20px" }}
                    onClick={() => handleEdit()}
                  >
                    Edit Class{" "}
                  </button>
                  <button onClick={() => handleDelete()} className="button-282">
                    Delete Class
                  </button>
                </span>
              )}
            </span>
          </div>
          <div className="col-lg-3">
            <span style={{ justifycontent: "flex-end", fontsize: "larger" }}>
              <button className="button-89" onClick={() => handleLogout()}>
                Log Out
              </button>
            </span>
          </div>
        </div>
      </div>

      {notifi && (
        <div id="container3">
          <div id="success-box">
            <div className="face">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="mouth happy"></div>
            </div>
            <div className="shadow scale"></div>
            <div className="message">
              <h3 className="alert">Class Deleted Successfully!!!</h3>
            </div>
            <button className="button-box">
              <h1
                className="green"
                style={{ color: "black" }}
                onClick={() => setNotify(false)}
              >
                Continue
              </h1>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
