import axios from "axios";
import React, { useEffect, useState } from "react";

import Url from "../Url";
import { useSelector, useDispatch } from "react-redux";
import { addClass } from "../redux/classSlice";

function Roadmap() {
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();
  const { zenclass } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  var len = zenclass.length;

  const { batch } = useSelector((state) => state.auth);

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    try {
      if (batch) {
        var res = await axios.get(`${Url}/class/eachBatch/${batch}`, {
          headers: {
            auth: token,
          },
        });
        setArr(res.data);
      } else {
        return "no class";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eachClass = (i) => {
    if (len > i) {
      var day = arr[i].day[0];
      var title = arr[i].day[1];
      var date = arr[i].day[2];
      var link = arr[i].day[3];
      var activity = arr[i].day[4];
      var content = arr[i].day[5];
      var content2 = arr[i].day[6];

      var obj = {
        ...day,
        ...title,
        ...date,
        ...link,
        ...activity,
        ...content,
        ...content2,
      };
      dispatch(addClass(obj));
    }
  };

  return (
    <>
      <h3 id="session" style={{ fontsize: "x-large" }}>
        Session Roadmap
      </h3>

      <div id="round1">
        <div
          className="round"
          style={{
            background: len - 1 >= 0 ? "blue" : "white",
            border: len + 1 == 1 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 0 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(0)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 0 ? "blue" : "white",
              color: len - 1 >= 0 ? "whitesmoke" : "black",
              cursor: len - 1 >= 0 ? "pointer" : "not-allowed",
            }}
          >
            1
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 1 ? "blue" : "white",
            border: len + 1 == 2 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 1 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(1)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 1 ? "blue" : "white",
              color: len - 1 >= 1 ? "whitesmoke" : "black",
              cursor: len - 1 >= 1 ? "pointer" : "not-allowed",
            }}
          >
            2
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 2 ? "blue" : "white",
            border: len + 1 == 3 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 2 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(2)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 2 ? "blue" : "white",
              color: len - 1 >= 2 ? "whitesmoke" : "black",
              cursor: len - 1 >= 2 ? "pointer" : "not-allowed",
            }}
          >
            3
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 3 ? "blue" : "white",
            border: len + 1 == 4 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 3 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(3)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 3 ? "blue" : "white",
              color: len - 1 >= 3 ? "whitesmoke" : "black",
              cursor: len - 1 >= 3 ? "pointer" : "not-allowed",
            }}
          >
            4
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 4 ? "blue" : "white",
            border: len + 1 == 5 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 4 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(4)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 4 ? "blue" : "white",
              color: len - 1 >= 4 ? "whitesmoke" : "black",
              cursor: len - 1 >= 4 ? "pointer" : "not-allowed",
            }}
          >
            5
          </button>
        </div>
        <div
          className="round6"
          style={{
            background: len - 1 >= 5 ? "blue" : "white",
            border: len + 1 == 6 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 5 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(5)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 5 ? "blue" : "white",
              color: len - 1 >= 5 ? "whitesmoke" : "black",
              cursor: len - 1 >= 5 ? "pointer" : "not-allowed",
            }}
          >
            6
          </button>
        </div>
        <div
          className="round"
          id="right-top"
          style={{
            background: len - 1 >= 11 ? "blue" : "white",
            border: len + 1 == 12 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 11 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(11)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 11 ? "blue" : "white",
              color: len - 1 >= 11 ? "whitesmoke" : "black",
              cursor: len - 1 >= 11 ? "pointer" : "not-allowed",
            }}
          >
            12
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 10 ? "blue" : "white",
            border: len + 1 == 11 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 10 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(10)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 10 ? "blue" : "white",
              color: len - 1 >= 10 ? "whitesmoke" : "black",
              cursor: len - 1 >= 10 ? "pointer" : "not-allowed",
            }}
          >
            11
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 9 ? "blue" : "white",
            border: len + 1 == 10 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 9 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(9)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 9 ? "blue" : "white",
              color: len - 1 >= 9 ? "whitesmoke" : "black",
              cursor: len - 1 >= 9 ? "pointer" : "not-allowed",
            }}
          >
            10
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 8 ? "blue" : "white",
            border: len + 1 == 9 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 8 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(8)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 8 ? "blue" : "white",
              color: len - 1 >= 8 ? "whitesmoke" : "black",
              cursor: len - 1 >= 8 ? "pointer" : "not-allowed",
            }}
          >
            9
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 7 ? "blue" : "white",
            border: len + 1 == 8 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 7 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(7)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 7 ? "blue" : "white",
              color: len - 1 >= 7 ? "whitesmoke" : "black",
              cursor: len - 1 >= 7 ? "pointer" : "not-allowed",
            }}
          >
            8
          </button>
        </div>
        <div
          className="round12"
          style={{
            background: len - 1 >= 6 ? "blue" : "white",
            border: len + 1 == 7 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 6 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(6)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 6 ? "blue" : "white",
              color: len - 1 >= 6 ? "whitesmoke" : "black",
              cursor: len - 1 >= 6 ? "pointer" : "not-allowed",
            }}
          >
            7
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 12 ? "blue" : "white",
            border: len + 1 == 13 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 12 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(12)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 12 ? "blue" : "white",
              color: len - 1 >= 12 ? "whitesmoke" : "black",
              cursor: len - 1 >= 12 ? "pointer" : "not-allowed",
            }}
          >
            13
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 13 ? "blue" : "white",
            border: len + 1 == 14 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 13 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(13)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 13 ? "blue" : "white",
              color: len - 1 >= 13 ? "whitesmoke" : "black",
              cursor: len - 1 >= 13 ? "pointer" : "not-allowed",
            }}
          >
            14
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 14 ? "blue" : "white",
            border: len + 1 == 15 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 14 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(14)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 14 ? "blue" : "white",
              color: len - 1 >= 14 ? "whitesmoke" : "black",
              cursor: len - 1 >= 14 ? "pointer" : "not-allowed",
            }}
          >
            15
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 15 ? "blue" : "white",
            border: len + 1 == 16 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 15 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(15)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 15 ? "blue" : "white",
              color: len - 15 >= 0 ? "whitesmoke" : "black",
              cursor: len - 1 >= 15 ? "pointer" : "not-allowed",
            }}
          >
            16
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 16 ? "blue" : "white",
            border: len + 1 == 17 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 16 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(16)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 16 ? "blue" : "white",
              color: len - 16 >= 0 ? "whitesmoke" : "black",
              cursor: len - 1 >= 16 ? "pointer" : "not-allowed",
            }}
          >
            17
          </button>
        </div>
        <div
          className="round18"
          style={{
            background: len - 1 >= 17 ? "blue" : "white",
            border: len + 1 == 18 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 17 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(17)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 17 ? "blue" : "white",
              color: len - 1 >= 17 ? "whitesmoke" : "black",
              cursor: len - 1 >= 17 ? "pointer" : "not-allowed",
            }}
          >
            18
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 23 ? "blue" : "white",
            border: len + 1 == 24 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 23 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(23)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 23 ? "blue" : "white",
              color: len - 1 >= 23 ? "whitesmoke" : "black",
              cursor: len - 1 >= 23 ? "pointer" : "not-allowed",
            }}
          >
            24
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 22 ? "blue" : "white",
            border: len + 1 == 23 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 22 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(22)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 22 ? "blue" : "white",
              color: len - 1 >= 22 ? "whitesmoke" : "black",
              cursor: len - 1 >= 22 ? "pointer" : "not-allowed",
            }}
          >
            23
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 21 ? "blue" : "white",
            border: len + 1 == 22 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 21 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(21)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 21 ? "blue" : "white",
              color: len - 1 >= 21 ? "whitesmoke" : "black",
              cursor: len - 1 >= 21 ? "pointer" : "not-allowed",
            }}
          >
            22
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 20 ? "blue" : "white",
            border: len + 1 == 21 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 20 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(20)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 20 ? "blue" : "white",
              color: len - 1 >= 20 ? "whitesmoke" : "black",
              cursor: len - 1 >= 20 ? "pointer" : "not-allowed",
            }}
          >
            21
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 19 ? "blue" : "white",
            border: len + 1 == 20 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 19 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(19)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 19 ? "blue" : "white",
              color: len - 1 >= 19 ? "whitesmoke" : "black",
              cursor: len - 1 >= 19 ? "pointer" : "not-allowed",
            }}
          >
            20
          </button>
        </div>
        <div
          className="round24"
          style={{
            background: len - 1 >= 18 ? "blue" : "white",
            border: len + 1 == 19 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 18 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(18)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 18 ? "blue" : "white",
              color: len - 1 >= 18 ? "whitesmoke" : "black",
              cursor: len - 1 >= 18 ? "pointer" : "not-allowed",
            }}
          >
            19
          </button>
        </div>
        <div
          className="round25"
          style={{
            background: len - 1 >= 24 ? "blue" : "white",
            border: len + 1 == 25 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 24 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(24)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 24 ? "blue" : "white",
              color: len - 1 >= 24 ? "whitesmoke" : "black",
              cursor: len - 1 >= 24 ? "pointer" : "not-allowed",
            }}
          >
            25
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 25 ? "blue" : "white",
            border: len + 1 == 26 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 25 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(25)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 25 ? "blue" : "white",
              color: len - 1 >= 25 ? "whitesmoke" : "black",
              cursor: len - 1 >= 25 ? "pointer" : "not-allowed",
            }}
          >
            26
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 26 ? "blue" : "white",
            border: len + 1 == 27 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 26 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(26)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 26 ? "blue" : "white",
              color: len - 1 >= 26 ? "whitesmoke" : "black",
              cursor: len - 1 >= 26 ? "pointer" : "not-allowed",
            }}
          >
            27
          </button>
        </div>{" "}
        <div
          className="round"
          style={{
            background: len - 1 >= 27 ? "blue" : "white",
            border: len + 1 == 28 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 27 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(27)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 27 ? "blue" : "white",
              color: len - 1 >= 27 ? "whitesmoke" : "black",
              cursor: len - 1 >= 27 ? "pointer" : "not-allowed",
            }}
          >
            28
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 28 ? "blue" : "white",
            border: len + 1 == 29 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 28 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(28)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 28 ? "blue" : "white",
              color: len - 1 >= 28 ? "whitesmoke" : "black",
              cursor: len - 1 >= 28 ? "pointer" : "not-allowed",
            }}
          >
            29
          </button>
        </div>
        <div
          className="round30"
          style={{
            background: len - 1 >= 29 ? "blue" : "white",
            border: len + 1 == 30 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 29 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(29)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 29 ? "blue" : "white",
              color: len - 1 >= 29 ? "whitesmoke" : "black",
              cursor: len - 1 >= 29 ? "pointer" : "not-allowed",
            }}
          >
            30
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 35 ? "blue" : "white",
            border: len + 1 == 36 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 35 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(35)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 35 ? "blue" : "white",
              color: len - 1 >= 35 ? "whitesmoke" : "black",
              cursor: len - 1 >= 35 ? "pointer" : "not-allowed",
            }}
          >
            36
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 34 ? "blue" : "white",
            border: len + 1 == 35 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 34 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(34)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 34 ? "blue" : "white",
              color: len - 1 >= 34 ? "whitesmoke" : "black",
              cursor: len - 1 >= 34 ? "pointer" : "not-allowed",
            }}
          >
            35
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 33 ? "blue" : "white",
            border: len + 1 == 34 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 33 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(33)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 33 ? "blue" : "white",
              color: len - 1 >= 33 ? "whitesmoke" : "black",
              cursor: len - 1 >= 33 ? "pointer" : "not-allowed",
            }}
          >
            34
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 32 ? "blue" : "white",
            border: len + 1 == 33 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 32 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(32)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 32 ? "blue" : "white",
              color: len - 1 >= 32 ? "whitesmoke" : "black",
              cursor: len - 1 >= 32 ? "pointer" : "not-allowed",
            }}
          >
            33
          </button>
        </div>
        <div
          className="round"
          style={{
            background: len - 1 >= 31 ? "blue" : "white",
            border: len + 1 == 32 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 31 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(31)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 31 ? "blue" : "white",
              color: len - 1 >= 31 ? "whitesmoke" : "black",
              cursor: len - 1 >= 31 ? "pointer" : "not-allowed",
            }}
          >
            32
          </button>
        </div>
        <div
          className="round36"
          style={{
            background: len - 1 >= 30 ? "blue" : "white",
            border: len + 1 == 31 ? "4px solid #F59F00" : null,
            cursor: len - 1 >= 30 ? "pointer" : "not-allowed",
          }}
          onClick={() => eachClass(30)}
        >
          {" "}
          <button
            className="choose"
            style={{
              background: len - 1 >= 30 ? "blue" : "white",
              color: len - 1 >= 30 ? "whitesmoke" : "black",
              cursor: len - 1 >= 30 ? "pointer" : "not-allowed",
            }}
          >
            31
          </button>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
