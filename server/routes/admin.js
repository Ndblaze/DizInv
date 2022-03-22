const express = require("express");

let { students } = require("../temp data/students");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.send(users);
});

router.get("/licence1", (req, res) => {
  res.status(200).send(
    students.filter((item) => {
      return item.Level === "Licence 1";
    })
  );
});

router.get("/students/:id", (req, res) => {
  const parameter = req.params.id;
  res.status(200).send(
    students.filter((item) => {
      return item.inscription === parameter;
    })
  );
});

router.delete("/delete/:id", (req, res) => {
  const parameter = req.params.id;
  const student = students.filter((item) => {
    if (item.inscription === parameter) {
      return item;
    }
  });

  //check student if exists
  if (student.length <= 0) {
    res.send({ status: "NON" });
    return;
  }

  //yes there exists then we delete it here 
  students = students.filter((item) => item.inscription !== parameter); 
  res.status(200).send({ status: "SUCCESS" });
});

module.exports = router;
