const express = require("express");

let { teacher } = require("../temp data/teachers");

const router = express.Router();

router.get("/data/:email", (req, res) => {
  const { email } = req.params;
  //console.log(email);

  //find the persons data from the database
  const person = teacher.filter((person) => {
    if (person.email === email) {
      return person;
    }
  });

  if (person.length > 0) {
    const { department, module, status, groups, level } = person[0];
    res.send({
      status: "SUCCESS",
      data: { department, module, status, groups, level },
    });

    return;
  }

  res.send({
    status: "FAILED",
  });
});

//use the department name to get the list of all teacger in that department
router.get("/emails/:department", (req, res) => {
  const { department } = req.params;

  //find the teachers emails in a certain department from the database
  const teachers = teacher.filter((teacher) => {
    if (teacher.department === department) {
      return teacher;
    }
  });

  if (teachers.length > 0) {
    const emails = teachers.map((email) => ({
      value: email.email,
      label: email.email,
    }));
    res.send({ status: "SUCCESS", emails: emails });
    return;
  }

  res.send({ status: "FAILED" });
  return;
});

module.exports = router;
