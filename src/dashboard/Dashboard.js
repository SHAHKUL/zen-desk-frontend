import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Url from "../Url";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  Legend,
  PointElement,
  LineElement
);

export const options = {
  elements: {
    bar: {
      borderWidth: 3,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        callback: (value) => value + " " + "day",
      },
    },
    y: {
      min: 0,
      max: 10,
      ticks: {
        stepSize: 1,
        callback: (value) => value + " " + "points",
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: "Assingment Marks",
    },
  },
};

export const options2 = {
  elements: {
    bar: {
      borderWidth: 3,
    },
  },
  scales: {
    x: {
      min: 1,
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 1,
        callback: (value) => value + " " + "day",
      },
    },
    y: {
      min: 0,
      max: 10,
      ticks: {
        stepSize: 1,
        callback: (value) => value + " " + "Score",
      },
      grid: {
        borderDash: false,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: "Credit Scores",
    },
  },
};

export const options3 = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },

  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Overoll Performance",
    },
  },
  scales: {
    y: {
      min: 1,
      max: 15,
      type: "linear",
      display: true,
      position: "left",
      ticks: {
        stepSize: 1,
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

function Dashboard() {
  const [users, setuser] = useState({});

  const [data, setChat] = useState({
    labels: [
      "Day 0-5",
      "Day 6-10",
      "Day 11-15",
      "Day 16-20",
      "Day 21-25",
      "Day 26-30",
      "Day 31-36",
    ],
    datasets: [
      {
        fill: true,
        label: "Expected",
        data: [10, 10, 10, 10, 10, 10, 10, 10],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "#ff1b6b",
      },
      {
        label: "Actual",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: [6, 7, 8],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });
  const [data2, setChat2] = useState({
    labels: [
      "Day 0-5",
      "Day 6-10",
      "Day 11-15",
      "Day 16-20",
      "Day 21-25",
      "Day 26-30",
      "Day 31-36",
    ],
    datasets: [
      {
        fill: true,
        label: "Expected",
        data: [11, 15, 18],
        borderColor: "#ff1b6b",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        fill: true,
        label: "Actual",
        data: [1, 19, 28],
        borderColor: "#ff1b6b",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        fill: true,
        label: "mock",
        data: [5, 7, 11],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  const [data3, setChat3] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        fill: true,
        label: "Overoll",
        data: [1, 19, 28],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Actual",
        data: [11, 15, 18],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  });
  const { user } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    fetchOne();
  }, []);

  const fetchOne = async () => {
    var res = await axios.get(`${Url}/auth/getOne/${user._id}`, {
      headers: {
        auth: token,
      },
    });
    setuser(res.data);

    var dataset = res.data.task
      ? res.data.task
          .map((cur) => {
            return cur.mark;
          })
          .filter((cur) => cur !== undefined)
      : null;

    setChat({
      labels: dataset.map((cur, idx) => (cur = idx + 1)),
      datasets: [
        {
          fill: true,
          label: "Expected",
          data: dataset.map((cur) => (cur = 10)),
          backgroundColor: "#f89b29",
        },
        {
          label: "Actual",

          data: dataset,
          backgroundColor: "#ff0f7b",
        },
      ],
    });

    setChat2({
      labels: dataset.map((cur, idx) => (cur = idx + 1)),
      datasets: [
        {
          fill: true,
          label: "Expected",
          data: dataset,
          borderColor: "#a9ff68",
          backgroundColor: "#ae10f9 ",
          tension: 0.7,
          pointBorderColor: "red",
        },
      ],
    });
    setChat3({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ],
      datasets: [
        {
          fill: true,
          label: "Overoll",
          data: dataset.map((cur) => (cur = 10)),
          borderColor: "#d3321d",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          yAxisID: "y",
        },
        {
          label: "Actual",
          data: dataset,
          borderColor: "#0b3866",
          backgroundColor: "#8364e8",
          yAxisID: "y1",
        },
      ],
    });
  };

  const total = users.task
    ? users.task.reduce((acc, cur) => {
        if (cur.mark) acc += 1;
        return acc;
      }, 0)
    : null;
  const totalClasses = Math.round((total / 36) * 100);

  const Eachmark = users.task
    ? users.task
        .map((cur) => {
          return cur.mark;
        })
        .filter((cur) => cur !== undefined)
    : null;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9" style={{ margin: "30px" }}>
          <h2>Total Attendance</h2>
          <div className="row">
            <div id="bo1" className="col-lg-8">
              <div className="range">
                <h5
                  style={{
                    position: "absolute",
                    top: "205px",
                    left: "600px",
                    zIndex: "999",
                    color: totalClasses > 50 ? "white" : "black",
                  }}
                >
                  {totalClasses}% completed
                </h5>
                <div
                  className="range__label"
                  style={{ width: `${totalClasses}%` }}
                ></div>
              </div>
            </div>
          </div>
          <h2 style={{ marginTop: "60px" }}>Assingment Submitted</h2>{" "}
          <div className="row">
            <div id="bo2" className="col-lg-6">
              <Bar options={options} data={data} />
            </div>
            <h2 style={{ marginTop: "60px" }}>Credit Score</h2>
            <div id="bo3" className="col-lg-6">
              <Line options={options2} data={data2} />
            </div>
          </div>
          <div className="row">
            <h2 style={{ marginTop: "60px" }}>Performance Analysis</h2>
            <div id="bo4" className="col-lg-8">
              <Line options={options3} data={data3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
