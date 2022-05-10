import React, { useState } from "react";
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
