import React, { useState } from "react";
import "./addcla.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Url from "../Url";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

function Addclass() {
  const [notifi, setNotify] = useState(false);
  const { token } = useSelector((state) => state.auth);

  let formik = useFormik({
    initialValues: {
      batch: "",
      day: "",
      title: "",
      date: "",
      link: "",
      activity: "",
      content: "",
      content2: "",
    },
    onSubmit: async (val) => {
      try {
        await axios.post(
          `${Url}/class/create`,
          {
            batch: val.batch,
            day: [
              { day: val.day },
              { title: val.title },
              { date: val.date },
              { link: val.join },
              { activity: val.activity },
              { content: val.content },
              { content2: val.content2 },
            ],
          },
          {
            headers: {
              auth: token,
            },
          }
        );
        setNotify(true);
        formik.setValues({
          batch: "",
          day: "",
          title: "",
          date: "",
          link: "",
          activity: "",
          content: "",
          content2: "",
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="demo-page">
      <div className="center-form">
        <main className="demo-page-content">
          <form onSubmit={formik.handleSubmit}>
            <section>
              <div className="href-target" id="input-types"></div>
              <h1>Create Class</h1>

              <div className="nice-form-group">
                <label>Batch</label>
                <input
                  type="text"
                  placeholder="Enter Batch "
                  name="batch"
                  value={formik.values.batch}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="nice-form-group">
                <label>Day</label>
                <input
                  type="text"
                  placeholder="Enter Day"
                  name="day"
                  value={formik.values.day}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="nice-form-group">
                <label>Date and Time</label>
                <input
                  type="text"
                  placeholder="Enter Date and Time"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="nice-form-group">
                <label>Joining Link</label>
                <input
                  type="text"
                  placeholder="Enter Joining Link"
                  name="link"
                  value={formik.values.link}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="nice-form-group">
                <label>Topic</label>
                <input
                  type="text"
                  placeholder="Enter Topic Name"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="nice-form-group">
                <label>Content</label>
                <input
                  type="text"
                  placeholder="Enter Content"
                  name="content"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="nice-form-group">
                <label>Additional Content</label>
                <input
                  type="text"
                  placeholder="Enter Content"
                  name="content2"
                  value={formik.values.content2}
                  onChange={formik.handleChange}
                  className="icon-left"
                />
              </div>
              <div className="nice-form-group">
                <label>Activity</label>
                <input
                  type="text"
                  placeholder="Activity link"
                  name="activity"
                  value={formik.values.activity}
                  onChange={formik.handleChange}
                  className="icon-left"
                />
              </div>
              <button type="submit" className="button-73" role="button">
                Submit
              </button>
            </section>
          </form>
          <Link to={"/home/addClass"}>
            <img
              className="backs"
              src="https://techzog.com/wp-content/uploads/2016/06/back-158491_960_720.png"
            />
          </Link>
        </main>
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
              <h3 className="alert">Class Created Successfully!!!</h3>
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

export default Addclass;
