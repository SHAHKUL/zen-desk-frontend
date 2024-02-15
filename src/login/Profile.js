import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./login.css";
import axios from "axios";
import Url from "../Url";
function Profile() {
  const [users, setuser] = useState({});
  const [education, setEducation] = useState();
  const [phone, setPhone] = useState();
  const [year, setYear] = useState();
  const [notifi, setNotify] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    fetchOne();
  }, []);

  const fetchOne = async () => {
    try {
      var res = await axios.get(`${Url}/auth/getOne/${user._id}`, {
        headers: {
          auth: token,
        },
      });
      setuser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      setNotify(true);
      await axios.put(
        `${Url}/auth/task/${user._id}`,
        {
          ...users,
          education,
          phone,
          year,
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
    <div className="profile-form">
      <form
        className="forms-profile-design"
        onSubmit={(e) => e.preventDefault()}
      >
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
              value={user.name}
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
            value={users.email}
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
            defaultValue={users.batch}
            value={users.batch}
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
            value={education ? education : users.education}
            onChange={(e) => setEducation(e.target.value)}
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
            value={phone ? phone : user.phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={year ? year : users.year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-warning"
          onClick={() => handleUpdate()}
        >
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
