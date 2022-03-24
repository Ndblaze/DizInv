const express = require("express");

let { students } = require("../temp data/students");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.send(users);
});

router.get("/students/:id", (req, res) => {
  const parameter = req.params.id;

  if (parameter === "licence1") {
    res.status(200).send(
      students.filter((item) => {
        return item.level === "Licence 1";
      })
    );
  }
  if (parameter === "licence2") {
    res.status(200).send(
      students.filter((item) => {
        return item.level === "Licence 2";
      })
    );
  }
  if (parameter === "licence3") {
    res.status(200).send(
      students.filter((item) => {
        return item.level === "Licence 3";
      })
    );
  }
  if (parameter === "master1") {
    res.status(200).send(
      students.filter((item) => {
        return item.level === "Master 1";
      })
    );
  }
  if (parameter === "master2") {
    res.status(200).send(
      students.filter((item) => {
        return item.level === "Master 2";
      })
    );
  }
});

//getting user profile
router.get("/student-profile/:id", (req, res) => {
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
