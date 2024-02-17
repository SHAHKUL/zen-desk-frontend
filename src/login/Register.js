import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import Url from "../Url";

function Register() {
  const [err, setErr] = useState("");
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (val) => {
      const errors = {};
      if (!val.name) {
        errors.name = "* Name field should not be empty";
      }
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
        var str = await axios.post(`${Url}/auth/register`, val);

        if (str.data.register) {
          navigate("/");
        } else {
          setErr(str.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="login-form">
      <form onSubmit={formik.handleSubmit}>
        <h2>Register Form</h2>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name ? (
          <div className="handle-error">{formik.errors.name}</div>
        ) : null}
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div className="handle-error">{formik.errors.email}</div>
        ) : null}
        <label for="email">Password:</label>
        <input
          type="text"
          id="email"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password ? (
          <div className="handle-error">{formik.errors.password}</div>
        ) : null}
        <button type="submit" className="but-class">
          Register
        </button>
        {err ? (
          <div className="handle-error">{err}</div>
        ) : (
          <div className="handle-error">
            If you already have an account login ?
          </div>
        )}

        <Link to={"/"}>
          <button
            type="submit"
            style={{ background: "red" }}
            className="but-class"
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
