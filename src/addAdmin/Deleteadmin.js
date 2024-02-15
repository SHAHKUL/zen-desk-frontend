import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Url from "../Url";
import axios from "axios";
import { useSelector } from "react-redux";

function Deleteadmin() {
  const [email, setMail] = useState("");
  const [succ, setSucc] = useState("");

  const { token } = useSelector((state) => state.auth);
  const deleteAdmin = async () => {
    try {
      var res = await axios.put(
        `${Url}/user/update/`,
        {
          email,
          isAdmin: false,
        },
        {
          headers: {
            auth: token,
          },
        }
      );
      await axios.delete(`${Url}/user/del/${email}`, {
        headers: {
          auth: token,
        },
      });
      if (res.data.success) {
        setTimeout(() => {
          setSucc("");
        }, 2000);
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
          <h1>Remove Admin</h1>
          <label>Email</label>
          <input onChange={(e) => setMail(e.target.value)} />

          <button
            type="submit"
            onClick={() => deleteAdmin()}
            className="button-73"
            role="button"
          >
            Delete
          </button>
        </form>

        {succ && (
          <div id="InfoBanner">
            <span className="reversed reversedRight">
              <span>&#9888;</span>
            </span>
            <span className="reversed reversedLeft">{succ}</span>
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

export default Deleteadmin;
