import axios from "axios";
import "./student.css";
import React, { useEffect, useState } from "react";
import Url from "../Url";
import { useDispatch, useSelector } from "react-redux";
import { showTask } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
function Studentlist() {
  const [list, setList] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      var res = await axios.get(`${Url}/auth/stuList`, {
        headers: {
          auth: token,
        },
      });
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOne = async (id) => {
    try {
      var res = await axios.get(`${Url}/auth/getOne/${id}`, {
        headers: {
          auth: token,
        },
      });
      var obj = {};
      obj._id = res.data._id;
      obj.name = res.data.name;
      dispatch(showTask({ user: obj }));
      navigate("/home/task");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1> Studentlist</h1>

      <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {list.map((cur) => {
          return (
            <li
              key={cur._id}
              onClick={() => fetchOne(cur._id)}
              className="button-23"
              role="button"
              style={{ marginLeft: "10px" }}
            >
              {cur.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Studentlist;
