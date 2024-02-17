import React, { useEffect, useState } from "react";
import "./home.css";
import Roadmap from "./Roadmap";
import { useSelector } from "react-redux";
import axios from "axios";
import Url from "../Url";
import { useFormik } from "formik";
function Home() {
  const [list, setList] = useState("");
  const [notifi, setNotify] = useState(false);

  const { day } = useSelector((state) => state.classDay);
  const { title } = useSelector((state) => state.classDay);
  const { date } = useSelector((state) => state.classDay);
  const { content } = useSelector((state) => state.classDay);
  const { activity } = useSelector((state) => state.classDay);
  const { link } = useSelector((state) => state.classDay);
  const { content2 } = useSelector((state) => state.classDay);
  const { user } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    singleUser();
  }, []);

  let formik = useFormik({
    initialValues: {
      front: "",
      back: "",
    },
    onSubmit: async (val) => {
      try {
        setNotify(true);
        await axios.put(
          `${Url}/auth/task/${user._id}`,
          {
            ...list,
            task: [
              ...list.task,
              {
                name: user.name,
                title: title,
                frontend: val.front,
                backend: val.back,
                created: new Date(),
                day: day,
              },
            ],
          },
          {
            headers: {
              auth: token,
            },
          }
        );
        singleUser();
      } catch (error) {
        console.log(error);
      }
    },
  });

  // const taskPost = async () => {
  //   try {
  //     setNotify(true);
  //     await axios.put(
  //       `${Url}/auth/task/${user._id}`,
  //       {
  //         ...list,
  //         task: [
  //           ...list.task,
  //           {
  //             name: user.name,
  //             title: title,
  //             frontend: front,
  //             backend: back,
  //             created: new Date(),
  //             day: day,
  //           },
  //         ],
  //       },
  //       {
  //         headers: {
  //           auth: token,
  //         },
  //       }
  //     );
  //     singleUser();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const singleUser = async () => {
    try {
      var res = await axios.get(`${Url}/auth/getOne/${user._id}`, {
        headers: {
          auth: token,
        },
      });
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const successMsg = () => {
    setNotify(false);
    formik.setValues({
      front: "",
      back: "",
    });
  };

  return (
    <>
      <div className="row mainDesign">
        <div className="col-lg-12">
          <div className="col-lg-11">
            <div className="row">
              <div id="join" className="col-lg-9">
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  Join the class on time!{" "}
                  <a href={link} target="_blank">
                    <button id="button1">Join Class </button>
                  </a>
                </h4>

                <div className="row">
                  <div
                    id="box1"
                    className="col-lg-12"
                    style={{ fontsize: "large" }}
                  >
                    {title ? title.toUpperCase() : null} - {day}
                    <br />
                    <span>
                      <p>{date}</p>
                    </span>
                    <hr />
                    <h3>Contents:</h3>
                    <p className="para-content">{content}</p>
                    <h3>Pre-read:</h3>
                    <p className="para-content">{content2}</p>
                  </div>

                  <h5 className="act">Activities</h5>

                  <div className="col-lg-11"></div>
                </div>
              </div>

              <div id="road" className="col-lg-3">
                <Roadmap />
              </div>
            </div>
          </div>
          <div id="bottom" className="row">
            <div id="sub" className="col-lg-9">
              {notifi && (
                <div id="container">
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
                      <h3 className="alert">Task Submitted Successfully!!!</h3>
                    </div>
                    <button className="button-box">
                      <h1
                        className="green"
                        style={{ color: "black" }}
                        onClick={() => successMsg()}
                      >
                        Continue
                      </h1>
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* <div id="add" className="col-lg-3">
              <h4>Additional Session</h4>
              <div id="box4">
                <div id="box5">
                  <h5>Recap Session - 18th March 2022</h5>
                  <h6>18/03/2022 - Friday - 10:00 AM</h6>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="test ">
          <div
            className="accordion accordion-flush extra-activity"
            id="accordionFlushExample"
          >
            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <p className="acti-para">
                    <a href={activity}> {activity}</a>
                  </p>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <form className="form-design" onSubmit={formik.handleSubmit}>
                    <label>Front End Code</label>
                    <input
                      type="text"
                      name="front"
                      value={formik.values.front}
                      onChange={formik.handleChange}
                    />
                    <label>Back End Code</label>
                    <input
                      type="text"
                      name="back"
                      value={formik.values.back}
                      onChange={formik.handleChange}
                    />

                    <span
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <button type="submit" className="button-73">
                        Submit
                      </button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
