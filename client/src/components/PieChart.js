import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  BarElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  BarElement
);

Tooltip.defaults.position = "bottom";

const data = {
  labels: [
    "Teachers",
    "Licence 1",
    "Licence 2",
    "Licence 3",
    "Master 1",
    "Master 2",
  ],
  datasets: [
    {
      label: "Users Analytics",
      data: [500, 700, 450, 300, 280, 150],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],

      borderWidth: 2,
    },
  ],
};

const options = {
  layout: {
    padding: 100,
  },
  plugins: {
    title: {
      display: true,
      text: "Pie Chart of users (Teachers, Students)",
      padding: {
        top: 10,
      },
    },
    legend: {
      position: "right",
      labels: {
        boxWidth: 15,
        boxHeight: 10,
      },
    },
  },
};

const PieChart = () => {
  return (
    <Wrapper>
      <Pie data={data} options={options} />
    </Wrapper>
  );
};

export default PieChart;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
