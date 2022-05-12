const express = require("express");

let { students } = require("../temp data/students");

const router = express.Router();

//database connection
const db = require("../ConnectDB");

router.get("/data/:email", (req, res) => {
  const { email } = req.params;
  //console.log(email);

  let UserDataSql = `SELECT * FROM dizinv.user, dizinv.students 
  WHERE user.id_user = students.inscription
   And  user.email = '${email}' ;`;

  db.query(UserDataSql, (err, result) => {
    if (err) {
      //  console.log({ status: "FAILED", message: err.sqlMessage });
      res.send({ status: "FAILED", message: "error fetching data ..." });
      return;
    }
    if (result.length > 0) {
      let response = result.map((data) => {
        return { ...data, password: "****" };
      });
     // console.log({ status: "SUCCESS", result: response[0] });
      res.send({ status: "SUCCESS", result: response[0] });
      return;
    }

    res.send({ status: "FAILED", message: "error fetching data ..." });
    return;
  });
});

module.exports = router;
 