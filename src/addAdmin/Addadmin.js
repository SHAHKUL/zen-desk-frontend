import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Url from "../Url";
import { useSelector } from "react-redux";

function Addadmin() {
  const [mail, setMail] = useState("");
  const [admins, setAdmins] = useState(Boolean);
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState("");

  const { token } = useSelector((state) => state.auth);

  const createAdmin = async () => {
    try {
      var res = await axios.post(
        `${Url}/user/create`,
        {
          email: mail,
          isAdmin: admins,
        },
        {
          headers: {
            auth: token,
          },
        }
      );
      if (res.data.message) {
        setTimeout(() => {
          setErr("");
        }, 2000);
        setErr(res.data.message);
      } else {
        setTimeout(() => {
          setSucc("");
        }, 3000);

        setSucc(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Add Admin</h1>
          <label>Email</label>
          <input onChange={(e) => setMail(e.target.value)} />
          <label>Admin</label>

          <select value={admins} onChange={(e) => setAdmins(e.target.value)}>
            <option disabled>Choose the Admin Option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          {err ? <div className="handle-error">{err}</div> : null}
          <button
            type="submit"
            onClick={() => createAdmin()}
            className="button-73"
            role="button"
          >
            Submit
          </button>
        </form>

        {succ && (
          <div id="InfoBanner">
            <span className="reversed reversedRight">
              <span>&#9888;</span>
            </span>
            <span className="reversed reversedLeft">{succ} </span>
          </div>
        )}
      </div>
      <Link to={"/home/addAdmin"}>
        <img
          className="back"
          src="https://techzog.com/wp-content/uploads/2016/06/back-158491_960_720.png"
        />
      </Link>
    </>
  );
}

export default Addadmin;
