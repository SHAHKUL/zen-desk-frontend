import React, { useState } from "react";
import { Link } from "react-router-dom";
import Url from "../Url";
import axios from "axios";
import { useSelector } from "react-redux";

function Update() {
  const [email, setMail] = useState("");
  const [batch, setBatch] = useState("");
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState("");
  const [val, setVal] = useState("");

  const { token } = useSelector((state) => state.auth);

  const createStudent = async () => {
    try {
      var res = await axios.put(
        `${Url}/user/updateStu`,
        {
          email: email,
          batch,
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
      } else if (res.data.success) {
        setTimeout(() => {
          setSucc("");
        }, 2000);

        setSucc(res.data.success);
      }
    } catch (error) {
      console.log(err);
    }
  };

  const fetch = async () => {
    var res = await axios.get(`${Url}/user/getOne/${email}`, {
      headers: {
        auth: token,
      },
    });
    if (res.data) {
      setVal(res.data.batch);
    } else {
      return;
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
          <h1>Update Student</h1>
          <label>Email</label>
          <input onChange={(e) => setMail(e.target.value)} />
          {
            <span style={{ display: "flex" }}>
              <button
                onClick={() => fetch()}
                className="button-73"
                role="button"
              >
                check
              </button>
              {val && (
                <p className="batch-check"> Student Current Batch {val}</p>
              )}
            </span>
          }

          <label>Batch</label>
          <input onChange={(e) => setBatch(e.target.value)} />
          {err ? <div className="handle-error">{err}</div> : null}
          <button
            type="submit"
            onClick={() => createStudent()}
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
            <span className="reversed reversedLeft">{succ}</span>
          </div>
        )}
      </div>
      <Link to={"/home/addStudent"}>
        <img
          className="back"
          src="https://techzog.com/wp-content/uploads/2016/06/back-158491_960_720.png"
        />
      </Link>
    </>
  );
}

export default Update;
