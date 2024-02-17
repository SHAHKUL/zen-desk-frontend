import axios from "axios";
import React, { useEffect, useState } from "react";
import Url from "../Url";
import { useDispatch, useSelector } from "react-redux";

import { assign } from "../redux/authSlice";

function Gotoclass() {
  const [list, setList] = useState([]);
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch();
    fetchOne();
  }, []);

  const fetch = async () => {
    try {
      var res = await axios.get(`${Url}/class/get`, {
        headers: {
          auth: token,
        },
      });
      var arr = [];
      res.data.map((cur) => {
        arr.push(cur.batch);
      });
      setList([...new Set(arr)]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOne = async (batch) => {
    try {
      if (batch == undefined) return;
      else {
        var res = await axios.get(`${Url}/class/eachBatch/${batch}`, {
          headers: {
            auth: token,
          },
        });
        dispatch(assign({ zenclass: res.data, batch: batch }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>List of Class</h1>
      <ol style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {list.map((cur, idx) => {
          return (
            <li
              key={idx}
              onClick={() => fetchOne(cur)}
              className="button-23"
              role="button"
              style={{ marginLeft: "10px" }}
            >
              {cur}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Gotoclass;
