import React, { useState } from "react";
import "./addcla.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Url from "../Url";
import { useSelector } from "react-redux";

function Addclass() {
  const [batch, setBatch] = useState("");
  const [day, setDay] = useState("");

  const [date, setDate] = useState("");
  const [join, setJoin] = useState("");

  const [topic, setTopic] = useState("");

  const [content, setContent] = useState("");
  const [add, setAdd] = useState("");
  const [act, setAct] = useState("");
  const [notifi, setNotify] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const createClass = async () => {
    setNotify(true);
    try {
      await axios.post(
        `${Url}/class/create`,
        {
          batch: batch,
          day: [
            { day: day },
            { title: topic },
            { date: date },
            { link: join },
            { activity: act },
            { content: content },
            { content2: add },
          ],
        },
        {
          headers: {
            auth: token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="demo-page">
      <div className="center-form">
        <main className="demo-page-content">
          <form onSubmit={(e) => e.preventDefault()}>
            <section>
              <div className="href-target" id="input-types"></div>
              <h1>Create Class</h1>

              <div className="nice-form-group">
                <label>Batch</label>
                <input
                  type="text"
                  placeholder="Enter Batch "
                  onChange={(e) => setBatch(e.target.value)}
                />
              </div>

              <div className="nice-form-group">
                <label>Day</label>
                <input
                  type="text"
                  placeholder="Enter Day"
                  onChange={(e) => setDay(e.target.value)}
                />
              </div>

              <div className="nice-form-group">
                <label>Date and Time</label>
                <input
                  type="text"
                  placeholder="Enter Date and Time"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="nice-form-group">
                <label>Joining Link</label>
                <input
                  type="text"
                  placeholder="Enter Joining Link"
                  onChange={(e) => setJoin(e.target.value)}
                />
              </div>

              <div className="nice-form-group">
                <label>Topic</label>
                <input
                  type="text"
                  placeholder="Enter Topic Name"
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <div className="nice-form-group">
                <label>Content</label>
                <input
                  type="text"
                  placeholder="Enter Content"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="nice-form-group">
                <label>Additional Content</label>
                <input
                  type="text"
                  placeholder="Enter Content"
                  onChange={(e) => setAdd(e.target.value)}
                  className="icon-left"
                />
              </div>
              <div className="nice-form-group">
                <label>Activity</label>
                <input
                  type="url"
                  placeholder="Activity link"
                  onChange={(e) => setAct(e.target.value)}
                  className="icon-left"
                />
              </div>
              <button
                type="submit"
                onClick={() => createClass()}
                className="button-73"
                role="button"
              >
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
