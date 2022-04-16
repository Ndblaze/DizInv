import React, { useEffect } from "react";
import axios from "axios";
import DashboardChelf from "../../componentsChelf/DashboardChelf";

const ChelfDashBoard = () => {
  const getChelfData = async () => {
    await axios
      .get(
        `http://localhost:5000/api/chelf/data/${sessionStorage.getItem(
          "email"
        )}`
      )
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          let { department } = res.data.data;
          const data = JSON.stringify(res.data.data);
          sessionStorage.setItem("userData", data);
          sessionStorage.setItem("department", department);
        }
        if (res.data.status === "FAILED") {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getChelfData();
  }, []);

  return <DashboardChelf />;
};

export default ChelfDashBoard;
