const express = require("express");

let { teacher } = require("../temp data/teachers");

const router = express.Router();

router.get("/profile/:email", (req, res) => {
  const { email } = req.params;
  // console.log(email);

  //find the persons data from the database
  const person = teacher.filter((person) => {
    if (person.email === email) {
      return person;
    }
  });

  //verify that there is a person and send
  if (person.length > 0) {
    res.send({ status: "SUCCESS", person: person[0] });
    return;
  }

  res.send({ status: "FAILED" });
});

router.post("/update-profile", (req, res) => {
  const { newValues } = req.body;
  //find the user with the email,
  const index = teacher.filter((person) => {
    if (person.email === newValues.email) {
      return person;
    }
  });

  if (index.length <= 0) {
    res.send({ status: "FAILED" });
    return;
  }

  try {
    index[0].firstName = newValues.firstName;
    index[0].lastName = newValues.lastName;
    index[0].email = newValues.email;
    index[0].phone = newValues.phone;
    index[0].address = newValues.address;
    index[0].city = newValues.city;
    index[0].password = newValues.password;

    res.send({ status: "SUCCESS", index: index[0] });
  } catch (error) {
    console.log(error.message);
    res.send({ status: "FAILED" });
  }
});

module.exports = router;
