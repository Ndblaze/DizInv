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
  const { date, group, module, sceance, level } = req.body;
  // console.log(date, group, module, sceance);

  if (date) {
    const dateSplit = date.split("/");
    const converted = dateSplit[2] + "-" + dateSplit[1] + "-" + dateSplit[0];
   // console.log(converted);

    let mainSql = `SELECT distinct firstName, lastName, id_user, student_group, level,  null as id_absence
    FROM dizinv.absence, dizinv.students, dizinv.user
    where user.id_user = students.inscription
    And students.student_group = '${group}'
    And students.level = '${level}'
    And students.inscription NOT IN (select inscription_no from dizinv.absence, dizinv.sessions 
                                      where sessions.id_session = absence.id_session 
                                      And sessions.date = '${converted}'
                                      AND sessions.student_group = '${group}'
                                      AND sessions.sceance = '${sceance}'
                                      And sessions.level = '${level}'
                                      And sessions.moduleName = '${module}')
    UNION
    select distinct firstName, lastName, inscription_no, student_group, level, absence.id_absence
    from dizinv.absence, dizinv.sessions, dizinv.user
    where sessions.id_session = absence.id_session 
    And user.id_user = absence.inscription_no  
    And sessions.date = '${converted}'
    AND sessions.student_group = '${group}'
    AND sessions.sceance = '${sceance}'
    And sessions.moduleName = '${module}'
    ;  `;

    //list of absent and present students
    db.query(mainSql, (err, result) => {
      if (err) {
        res.send({
          status: "FAILED",
          message: "Error something went wrong, try again !!",
        });
        return;
      }

      if (result.length > 0) {
        const main = result.map((data) => {
          return { ...data, date: date, sceance: sceance };
        });
        // console.log(main);
        res.send({ status: "SUCCESS", results: main });
        return;
      } else {
        res.send({ status: "SUCCESS", results: result });
        return;
      }
    });
  }
});

module.exports = router;
