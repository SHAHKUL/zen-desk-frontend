import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./header.css";
import { logout } from "../redux/authSlice";
import { removeClass } from "../redux/classSlice";

function Header() {
  const { batch } = useSelector((state) => state.auth);
  const { batche } = useSelector((state) => state.classDay);
  const { user } = useSelector((state) => state.auth);
  const { admin } = useSelector((state) => state.auth);
  const { nameAdmin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeClass());
    dispatch(logout());
    navigate("/");
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
            <span style={{ display: "flex",justifyContent:'space-between' }}>
              <span className="button-90" style={{display:"flex"}}>
                <h3> Name:</h3>
                <h3 style={{ marginLeft: "10px" }}>
                  {user.name ? user.name.toUpperCase() : null}
                </h3>
              </span>
              {admin && <h3 className="button-29">Admin {nameAdmin ?nameAdmin.toUpperCase():null}</h3>}
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
    </div>
  );
}

export default Header;
