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
          const data = JSON.stringify(res.data.data);
          sessionStorage.setItem("userData", data);
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
