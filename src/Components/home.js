import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Nav from "./navigat";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Home = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetchData();
  }, []); // Run once when the component mounts

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getex");
      const dataFromBackend = response.data;

      // Extracting labels and data from the backend response
      const labels = dataFromBackend.map((item) => item.date);
      const amounts = dataFromBackend.map((item) => item.amount);

      // Update the chartData state
      setChartData({
        ...chartData,
        labels: labels,
        datasets: [
          {
            ...chartData.datasets[0],
            data: amounts,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          fontSize: 20, // Adjust the font size here
        },
      },
    },
  };

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <div>
          <div>
            <h1>Expenses Statistics</h1>
          </div>
          <div>
            <Bar data={chartData} options={options} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
