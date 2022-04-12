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

module.exports = router;
