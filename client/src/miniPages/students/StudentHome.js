import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentHero from "../../componentStudent/StudentHero";
import StudentNavBar from "../../componentStudent/StudentNavBar";

//static dataset
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../../componentStudent/StaticData";
import InfoSection from "../../componentStudent/InfoSection";
import StudentFooter from "../../componentStudent/StudentFooter";

const StudentHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getStudentData();
  }, []);

  //get the necesarry data of the student
  const getStudentData = async () => {
    await axios
      .get(
        `http://localhost:5000/api/student/data/${sessionStorage.getItem(
          "email"
        )}`
      )
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          let { department, inscription, firstName, level } = res.data.data;
          let { student_group, section_speciality } = res.data.data;

          // sessionStorage.setItem("department", department);
          // sessionStorage.setItem("module", module);
          // sessionStorage.setItem("status", status);
          // sessionStorage.setItem("groups", groups);
          // sessionStorage.setItem("level", level);
          // sessionStorage.setItem("sceance", sceance);
        }
        if (res.data.status === "FAILED") {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <StudentNavBar toggle={toggle} />
      <StudentHero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <StudentFooter />
    </>
  );
};

export default StudentHome;
