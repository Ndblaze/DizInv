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
  const parameter = req.params.id ;
  res.status(200).send(
    students.filter((item) => {
      return item.inscription === parameter;
    })
  );
});

module.exports = router;
