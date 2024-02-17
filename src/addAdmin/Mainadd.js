import React from "react";
import { Link } from "react-router-dom";

function Mainadd() {
  return (
    <div style={{ display: "flex" }}>
      <Link className="add" to={"/home/addAdmin/add"}>
        <div>
          <h1 id="head">Add Admin</h1>
        </div>
      </Link>
      <Link className="add" to={"/home/addAdmin/delelte"}>
        <div>
          <h1 id="head">Delete Admin</h1>
        </div>
      </Link>
    </div>
  );
}

export default Mainadd;
