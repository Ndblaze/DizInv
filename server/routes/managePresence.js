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
    console.log(converted);

    let mainSql = `SELECT distinct firstName, lastName, id_user, student_group, level, null as absence_status, null as id_absence
    FROM dizinv.absence, dizinv.students, dizinv.user
    where user.id_user = students.inscription
    And students.student_group = 'G1'
    And students.level = 'Licence 1'
    And students.inscription NOT IN (select inscription_no from dizinv.absence, dizinv.sessions 
                                      where sessions.id_session = absence.id_session And sessions.date = '2022-08-03'
                                      AND sessions.student_group = 'G1' AND sessions.sceance = 'TP' And sessions.level = 'Licence 1')
    UNION
    select distinct firstName, lastName, inscription_no, student_group, level, absence_status, absence.id_absence
    from dizinv.absence, dizinv.sessions, dizinv.user
    where sessions.id_session = absence.id_session 
    And user.id_user = absence.inscription_no  
    And sessions.date = '2022-08-03'
    AND sessions.student_group = 'G1'
    AND sessions.sceance = 'TP'
    ;  `;

    //list of absent and present students
    db.query(
      mainSql,
      [`${converted}`, `${group}`, `${module}`, `${sceance}`],
      (err, result) => {
        if (err) {
          console.log({ status: "FAILED", message: err.sqlMessage });
          return;
        }

        if (result.length > 0) {
          const main = result.map((data) => {
            return { ...data };
          });

          console.log(main);
          // const results = result.map((data) => {
          //   return { ...data, date: new Date(data.date).toLocaleDateString() };
          // });
          //   console.log(results);
          //   res.send({ status: "SUCCESS", results: results });
          //   return;
          // } else {
          //   res.send({ status: "SUCCESS", results: result });
          //   return;
        }
      }
    );
  }
});

module.exports = router;
