import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useFormik } from "formik";
import Url from "../Url";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, adminTask } from "../redux/authSlice";
function Login() {
  const [err, setErr] = useState("");
  const [log, setLog] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (val) => {
      const errors = {};
      if (!val.email) {
        errors.email = "* Email field should not be empty";
      }
      if (!val.password) {
        errors.password = "* Password field should not be empty";
      }
      return errors;
    },
    onSubmit: async (val) => {
      try {
        setLog(true);
        var str = await axios.post(`${Url}/auth/login`, val);

        if (str.data.message) {
          setErr(str.data.message);
          setLog(false);
        } else {
          dispatch(login(str.data));
          if (str.data.isAdmin) {
            var obj = {};
            obj.special = str.data.others.name;

            dispatch(adminTask(obj));
          }

          navigate("/home");
        
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="login-form">
      <form onSubmit={formik.handleSubmit}>
        <h2>Login Form</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div
            className="handle-error"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            {formik.errors.email}
          </div>
        ) : null}
        <label htmlFor="name">Password:</label>
        <input
          type="password"
          id="name"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password ? (
          <div
            className="handle-error"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            {formik.errors.password}
          </div>
        ) : null}
        <button className="but-class" type="submit">
          {" "}
          {log && (
            <span className="main-book">
              <div className="full-book">
                <div className="book">
                  <div className="book__pg-shadow"></div>
                  <div className="book__pg"></div>
                  <div className="book__pg book__pg--2"></div>
                  <div className="book__pg book__pg--3"></div>
                  <div className="book__pg book__pg--4"></div>
                  <div className="book__pg book__pg--5"></div>
                </div>
              </div>
            </span>
          )}
          <span>Login</span>
        </button>

        {err ? (
          <div className="handle-error">{err}</div>
        ) : (
          <div className="handle-error">
            If you does't have an account Register ?
          </div>
        )}
        <Link to={"/register"}>
          <button className="but-class">Register</button>
        </Link>
      </form>
      <div className="table-login">
        <table className="content-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>john@gmail.com</td>
              <td>john</td>
              <td>admin</td>
            </tr>
            <tr className="active-row">
              <td>alice@gmail.com</td>
              <td>alice</td>
              <td>student</td>
            </tr>
            <tr>
              <td>jack@gmail.com</td>
              <td>jack</td>
              <td>student</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Login;
