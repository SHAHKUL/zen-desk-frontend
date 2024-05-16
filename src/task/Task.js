import React, { useEffect, useState } from "react";
import axios from "axios";
import "./task.css";
import Url from "../Url";
import { useSelector } from "react-redux";
import { format } from "date-fns";

function Task() {
  const [tasks, setTask] = useState([]);
  const [show, setShow] = useState(false);
  const [each, setEach] = useState({});

  const [mark, setMark] = useState("");
  const [comment, setComment] = useState(String);
  const [val, setVal] = useState(Number);
  const [list, setList] = useState({});

  const [notifi, setNotify] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  const { batch } = useSelector((state) => state.auth);
  const { admin } = useSelector((state) => state.auth);

  useEffect(() => {
    fetch();
    fetchOne();
  }, []);

  const fetch = async () => {
    var res = await axios.get(`${Url}/auth/getOne/${user._id}`, {
      headers: {
        auth: token,
      },
    });

    setTask(res.data.task);
  };

  const fetchOne = async () => {
    var res = await axios.get(`${Url}/auth/getOne/${user._id}`, {
      headers: {
        auth: token,
      },
    });
    setList(res.data);
  };

  const markPost = async () => {
    setNotify(true);
    try {
      await axios.put(
        `${Url}/auth/task/${user._id}`,
        {
          ...list,
          task: [
            ...list.task,
            (list.task[val].comment = comment),
            (list.task[val].mark = mark),
          ],
        },
        {
          headers: {
            auth: token,
          },
        }
      );

      fetch();
    } catch (error) {
      console.log(error);
    }
  };

  const showTask = (va) => {
    setShow(!show);
    setEach(tasks[va]);
    setVal(va);
  };

  return (
    <div className="row">
      <div
        className={`${show ? "col-lg-6" : "col-lg-12"}`}
        style={{ cursor: "pointer" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {tasks
            ? tasks
                .map((cur, idx) => {
                  return cur.name ? (
                    <div
                      className="task"
                      key={idx}
                      onClick={() => showTask(idx)}
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h3>{user.name ? user.name.toUpperCase() : null}</h3>
                        <p>
                          Submited on
                          {cur.created
                            ? format(new Date(cur.created), " dd/MM/yyyy")
                            : null}
                        </p>
                      </span>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {
                          batch? <p>
                          ({batch ? batch.toUpperCase() : null}) - {" "}
                          {cur.title ? cur.title.toUpperCase() : "No Class"} - {" "}
                           {cur.day ? cur.day : "No Class"}
                        </p>:<p>No Batch assign</p>
                        }
                        
                       
                        <span style={{ display: "flex" }}>
                          <div className="num-design">
                            {cur.mark ? cur.mark : null}
                          </div>{" "}
                          <div className="key-word">Task</div>
                        </span>
                      </span>
                    </div>
                  ) : null;
                })
                .reverse()
            : null}
        </div>
      </div>

      {show && (
        <div className="col-lg-6 task-desc">
          <div>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
                padding: "5px",
              }}
            >
              <h3>{user.name ? user.name.toUpperCase() : null}</h3>
              <p style={{ display: "flex" }}>
                <span className="num-design">{each.mark}</span>{" "}
                <span className="key-word">Task</span>
              </p>
            </span>
            <div className="class-design">
              <p>
                {" "}
                ({batch ? batch.toUpperCase() : null}) -{" "}
                {each.title ? each.title.toUpperCase() : null}
              </p>
              <p>
                Submited on{" "}
                {each.created
                  ? format(new Date(each.created), " dd/MM/yyyy")
                  : null}
              </p>
            </div>
            <p>Students Comments:</p>
            <h4>Answers</h4>
            <div className="code-box">
              <span style={{ display: "flex" }}>
                <h5>Front-end source Code :</h5>
                <a href={each.frontend} target="_blank" rel="noreferrer">
                  {each.frontend}
                </a>
              </span>
              <span style={{ display: "flex" }}>
                <h5>Back-end source Code :</h5>
                <a href={each.frontend} target="_blank" rel="noreferrer">
                  {each.backend}
                </a>
              </span>
            </div>
            <div className="task-comment">
              <h4>Comments</h4>
              <span className="task-feed">
                <p className="task-box">{each.comment}.</p>
              </span>
            </div>
            {admin ? (
              <span>
                {each.mark ? null : (
                  <div className="form-position">
                    <form
                      className="form-comment"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <label>Mark</label>
                      <input onChange={(e) => setMark(e.target.value)} />
                      <label>Comments</label>
                      <input onChange={(e) => setComment(e.target.value)} />
                      <button
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                        onClick={() => markPost()}
                        className="button-73"
                      
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                )}
              </span>
            ) : null}
          </div>
        </div>
      )}
      {notifi && (
        <div id="container3">
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
              <h3 className="alert">Task Evaluated Successfully!!!</h3>
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

export default Task;
