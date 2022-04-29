const express = require("express");

const router = express.Router();

//database connection
const db = require("../ConnectDB");

//get the list of dates in the database
router.get("/get-dates/:module/:sceance/:group", (req, res) => {
  const { module, sceance, group } = req.params;

  //console.log(module, sceance, group);

  let sql = `SELECT date FROM sessions WHERE sceance = ? AND student_group = ? AND moduleName = ? `;

  db.query(sql, [`${sceance}`, `${group}`, `${module}`], (err, result) => {
    if (err) {
      res.send({ status: "FAILED", message: err.sqlMessage });
    }
    if (result.length > 0) {
      const results = result.map((date) => {
        // console.log(date)
        const convert = new Date(date.date).toLocaleDateString();
        return { value: convert, label: convert };
      });
      // console.log(results)
      res.send({ status: "SUCCESS", results: results });
      return;
    } else {
      res.send({ status: "SUCCESS", results: result });
      return;
    }
  });
});

//get the list of presence with the chosen date
router.post("/get-list-presence", (req, res) => {
  const { date } = req.body;
  console.log(date);

  const dateSplit = date.split("/");
  const converted = dateSplit[2] + "-" + dateSplit[1] + "-" + dateSplit[0];
  console.log(converted);

  let sql = `SELECT * FROM sessions, absence, user 
             WHERE sessions.date = ?
             AND sessions.id_session = absence.id_session 
             AND user.id_user = absence.inscription_no`;

  db.query(sql, [`${converted}`], (err, result) => {
    if (err) {
      console.log({ status: "FAILED", message: err.sqlMessage });
    }

    if (result.length > 0) {
      const results = result.map((data) => {
        return { ...data, date: new Date(data.date).toLocaleDateString() };
      });
     // console.log(results);
      res.send({ status: "SUCCESS", results: results });
      return;
    } else {
      res.send({ status: "SUCCESS", results: result });
      return;
    }
  });
});

module.exports = router;
