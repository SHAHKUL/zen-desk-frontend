import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import "./login.css";
import axios from "axios";
import Url from "../Url";
function Profile() {
  const [notifi, setNotify] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    fetchOne();
  }, []);

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      batch: "",
      education: "",
      phone: "",
      year: "",
    },
    onSubmit: async (val) => {
      try {
        await axios.put(
          `${Url}/auth/task/${user._id}`,
          val,
          {
            headers: {
              auth: token,
            },
          }
        );
        setNotify(true);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const fetchOne = async () => {
    try {
      var res = await axios.get(`${Url}/auth/getOne/${user._id}`, {
        headers: {
          auth: token,
        },
      });
      formik.setValues(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile-form">
      <form className="forms-profile-design" onSubmit={formik.handleSubmit}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Personal Details
        </h1>
        <div className="row">
          <div className="col">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              disabled
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Batch
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="batch"
            value={formik.values.batch}
            onChange={formik.handleChange}
            disabled
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Educational Qualification
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="education"
            value={formik.values.education}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Year Of Passing
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="year"
            value={formik.values.year}
            onChange={formik.handleChange}
          />
        </div>
        <button type={"submit"} className="btn btn-outline-warning">
          Update
        </button>
      </form>
      {notifi && (
        <div id="container2">
          <div id="success-box">
            <div className="dot"></div>
            <div className="dot two"></div>
            <div className="face">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="mouth happy"></div>
            </div>
            <div className="shadow scale"></div>
            <div className="message">
              <h3 className="alert">Updated Successfully!!!</h3>
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

export default Profile;
