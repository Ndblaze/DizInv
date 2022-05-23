const express = require("express");

let { students } = require("../temp data/students");
let { schedule } = require("../temp data/schedules");
let { teacher } = require("../temp data/teachers");
let { modules } = require("../temp data/modules");

const router = express.Router();

//database connection
const db = require("../ConnectDB");

//password generator
const generator = require("generate-password");

router.get("/dashboard", (req, res) => {
  res.send(users);
});

//getting a list of students by there levels (DB)
router.get("/students/:level", (req, res) => {
  let parameter = req.params.level;

  //console.log(parameter)

  if (parameter === "licence1") {
    parameter = "Licence 1";
  } else if (parameter === "licence2") {
    parameter = "Licence 2";
  } else if (parameter === "licence3") {
    parameter = "Licence 3";
  } else if (parameter === "master1") {
    parameter = "Master 1";
  } else if (parameter === "master2") {
    parameter = "Master 2";
  } else {
  }

  let getUserSQL = ` SELECT * FROM dizinv.user, dizinv.students 
                    where user.id_user = students.inscription
                    and students.level = '${parameter}' ;`;

  if (parameter) {
    db.query(getUserSQL, (err, result) => {
      if (err) {
        res.send({ status: "FAILED" });
        return;
      }
      if (result) {
        let response = result.map((data) => {
          return { ...data, password: "****" };
        });
        res.status(200).send({ status: "SUCCESS", result: response });
      }
    });
  } else {
    res.send({ status: "FAILED" });
    return;
  }
});

//geting the admin profile (DB)
router.get("/profile/:email", (req, res) => {
  const { email } = req.params;
  // console.log(email);

  let adminProfileSQL = ` SELECT * 
                        FROM dizinv.user, dizinv.admin
                        where email = 'admin@gmail.com'`;

  if (email) {
    db.query(adminProfileSQL, (err, result) => {
      if (err) {
        res.send({
          status: "FAILED",
          message: "something went wrong, Try again !!",
        });
        return;
      }
      if (result) {
        // console.log({ ...result[0], password: "****" })
        res.send({
          status: "SUCCESS",
          result: { ...result[0], password: "*********" },
        });
        return;
      }
    });
  } else {
    res.send({
      status: "FAILED",
      message: "something went wrong, Try again !!",
    });
    return;
  }
});

//updating Admin profile (DB)
router.post("/update-profile", (req, res) => {
  const { values, id } = req.body;
  const { firstName, lastName, email, address, city, phone } = values;
  //   console.log(id, values);

  let adminProfileSQL = `UPDATE dizinv.user 
                        SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}', 
                        address = '${address}', city = '${city}',
                        phone = '${phone}'
                        WHERE (user.id_user = '${id}');`;

  if (values) {
    db.query(adminProfileSQL, (err, result) => {
      if (err) {
        console.log("kkkk");
        res.send({
          status: "FAILED",
          message: "something went wrong, Try again !!",
        });
        console.log({
          message: err.message,
        });
        return;
      }
      if (result) {
        res.send({
          status: "SUCCESS",
        });
        return;
      }
    });
  } else {
    res.send({
      status: "FAILED",
      message: "something went wrong, Try again !!",
    });
    return;
  }
});

//getting user profile with theere id both teacher and students (DB)
router.get("/user-profile/:handler/:id", (req, res) => {
  const { handler, id } = req.params;
  // console.log(handler, id);

  let userStudentSQL = ` SELECT * FROM dizinv.user, dizinv.students
                  where user.id_user = students.inscription
                  and inscription = '${id}'
                  ;`;

  let userTeacherSQL = ` SELECT * FROM dizinv.user, dizinv.teacher
                        where user.id_user = teacher.id_user
                        and teacher.id_user = '${id}'
                  ;`;

  if (handler === "student") {
    db.query(userStudentSQL, (err, result) => {
      if (err) {
        res.send({ status: "FAILED" });
        return;
      }
      if (result) {
        let response = result.map((data) => {
          return { ...data, password: "****" };
        });
        res.status(200).send({ status: "SUCCESS", result: response });
      }
    });
  }
  if (handler === "teacher") {
    db.query(userTeacherSQL, (err, result) => {
      if (err) {
        res.send({ status: "FAILED" });
        return;
      }
      if (result) {
        let response = result.map((data) => {
          const obj = {
            ...data,
            password: "********",
            id: data.id_user,
            groups: JSON.parse(data.groups),
            sceance: JSON.parse(data.sceance),
          };
          // console.log(obj);
          return obj;
        });
        res.status(200).send({ status: "SUCCESS", result: response });
      }
    });
  }
});

//updating Student profile by admin (DB)
router.post("/update-profile/student", (req, res) => {
  const { values, id } = req.body;
  const { firstName, lastName, email, address, city, phone } = values;
  // console.log(id, values);

  let adminProfileSQL = `UPDATE dizinv.user 
                        SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}', 
                        address = '${address}', city = '${city}',
                        phone = '${phone}'
                        WHERE (user.id_user = '${id}');`;

  if (values) {
    db.query(adminProfileSQL, (err, result) => {
      if (err) {
        console.log("kkkk");
        res.send({
          status: "FAILED",
          message: "something went wrong, Try again !!",
        });
        // console.log({
        //   message: err.message,
        // });
        return;
      }
      if (result) {
        res.send({
          status: "SUCCESS",
        });
        return;
      }
    });
  } else {
    res.send({
      status: "FAILED",
      message: "something went wrong, Try again !!",
    });
    return;
  }
});

//deleting a user both teacher and students (DB)
router.delete("/delete/:handler/:id", (req, res) => {
  const { handler, id } = req.params;
  console.log(handler, id);

  //delete students fromt he students table
  let deleteStudentSQL1 = `DELETE FROM dizinv.students WHERE (students.inscription = '${id}');`;
  //delete teacher from the tecaheers table
  let deleteTeacherSQL1 = `DELETE FROM dizinv.teacher WHERE (teacher.id_user = '${id}');`;
  // deletes both teacher and student in the user table
  let deleteUserSQL = `DELETE FROM dizinv.user WHERE (user.id_user = '${id}');`;

  // deleting students
  if (handler === "student") {
    //deleting from student table first before the user table because the id is a foregine key to the user table
    db.query(deleteStudentSQL1, (err, result) => { 
      if (err) {
        res.send({
          status: "FAILED",
          message: "something went wrong, Try again!!",
        });
        return;
      }
      if (result) {
        //now deleting from the user table after succefully deleting from student table
        db.query(deleteUserSQL, (err, result) => {
          if (err) {
            res.send({
              status: "FAILED",
              message: "something went wrong, Try again!!",
            });
            return;
          }
          if (result) {
            res.send({
              status: "SUCCESS",
              message: "User deleted succefully",
            });
            return;
          }
        });
      }
    });
  }

  //deleting teacher
  if (handler === "teacher") {
    //deleting from teacher table first before the user table because the id is a foregine key to the user table
    db.query(deleteTeacherSQL1, (err, result) => {
      if (err) {
        res.send({
          status: "FAILED",
          message: "something went wrong, Try again!!",
        });
        return;
      }
      if (result) {
        //now deleting from the user table after succefully deleting from student table
        db.query(deleteUserSQL, (err, result) => {
          if (err) {
            res.send({
              status: "FAILED",
              message: "something went wrong, Try again!!",
            });
            return;
          }
          if (result) {
            res.send({
              status: "SUCCESS",
              message: "User deleted succefully",
            });
          }
        });
      }
    });
  } 
});

//route to add a new student (DB)
router.post("/add-new-student", (req, res) => {
  const { values } = req.body;
  // console.log(values);

  const { firstName, lastName, email, phone, address, city } = values;
  const { level, inscription, section_speciality, department, group } = values;

  const password = generator.generate({
    length: 10,
    lowercase: true,
    uppercase: false,
    numbers: false,
    symbols: false,
  });
  // const ins = generator.generate({
  //   length: 10,
  //   lowercase: false,
  //   uppercase: true,
  //   numbers: true,
  //   symbols: false,
  // });

  let addStudentUserSQL = `INSERT INTO dizinv.user 
                      (id_user, firstName, lastName, email, address, city, password, phone, type) 
                      VALUES ('${inscription}', '${firstName}', '${lastName}', '${email}', '${address}', 
                      '${city}', '${password}', '${phone}', 'student');`;

  let addStudentTableSQL = `INSERT INTO dizinv.students 
                          (inscription, department, level, student_group, section_speciality) 
                          VALUES ('${inscription}', '${department}', '${level}', '${group}', '${section_speciality}');
  `;

  if (values) {
    db.query(addStudentUserSQL, (err, result) => {
      if (err) {
        res.send({ status: "FAILED" });
        return;
      }
      if (result) {
        db.query(addStudentTableSQL, (err, result) => {
          if (err) {
            res.send({
              status: "FAILED",
              message: "could not add to student table",
            });
            return;
          }
          if (result) {
            res.status(200).send({ status: "SUCCESS" });
            return;
          }
        });
      }
    });
  } else {
    //if it reacheses here
    res.send({ status: "FAILED" });
    return;
  }
});

//route to add a new teacher (DB)
router.post("/add-new-teacher", (req, res) => {
  const { data } = req.body;
  console.log(data);

  const { id, firstName, lastName, email, phone } = data;
  const { address, city, password } = data;
  const { level, status, module, department, groups, sceance } = data;

  let groupString = JSON.stringify(groups);
  let sceanceString = JSON.stringify(sceance);

  //console.log(groupString, sceanceString, department);

  let addTeacherUserSQL = `INSERT INTO dizinv.user 
                          (user.id_user, user.firstName, user.lastName, user.email, user.address, user.city, user.password, user.phone, user.type) 
                          VALUES ('${id}', '${firstName}', '${lastName}', '${email}', '${address}', 
                          '${city}', '${password}', '${phone}', '${status}');`;

  let addTeacherTableSQL = `INSERT INTO dizinv.teacher
                           (teacher.id_user, teacher.department, teacher.groups, teacher.module, teacher.level, teacher.sceance, teacher.status) 
                           VALUES ('${id}', '${department}', '${groupString}' , '${module}', '${level}', '${sceanceString}', '${status}');`;

  if (data) {
    db.query(addTeacherUserSQL, (err, result) => {
      if (err) {
        console.log(err.message);
        res.send({ status: "FAILED" });
        return;
      }
      if (result) {
        db.query(addTeacherTableSQL, (err, result) => {
          if (err) {
            console.log(err);
            res.send({
              status: "FAILED",
            });
            return;
          }
          if (result) {
            res.send({ status: "SUCCESS" });
            return;
          }
        });
      }
    });
  } else {
    //if it reacheses here
    res.send({ status: "FAILED" });
    return;
  }
});

router.get("/schedule/:level", (req, res) => {
  const { level } = req.params;
  if (level === "Licence 1") {
    res.send(schedule.licence1);
  }
  if (level === "Licence 2") {
    res.send(schedule.licence2);
  }
  if (level === "Licence 3") {
    res.send(schedule.licence3);
  }
  if (level === "Master 1") {
    res.send(schedule.master1);
  }
  if (level === "Master 2") {
    res.send(schedule.master2);
  }
});

router.post("/schedule", (req, res) => {
  const { schema } = req.body;

  if (schema.hasOwnProperty("level") === false) {
    res.send({ status: "FAILD" });
    return;
  }

  if (schema.level === "Licence 1") {
    schedule.licence1 = schema;
    res.send({ status: "SUCCESS" });
    return;
  }
  if (schema.level === "Licence 2") {
    schedule.licence2 = schema;
    res.send({ status: "SUCCESS" });
    return;
  }
  if (schema.level === "Licence 3") {
    schedule.licence3 = schema;
    res.send({ status: "SUCCESS" });
    return;
  }
  if (schema.level === "Master 1") {
    schedule.master1 = schema;
    res.send({ status: "SUCCESS" });
    return;
  }
  if (schema.level === "Master 2") {
    schedule.master2 = schema;
    res.send({ status: "SUCCESS" });
    return;
  }
  res.send({ status: "FAILD" });
  return;
});

/* 
    when sendomg the schedule to the datebase we send it as a string by converting it with
    JSON.stringify() method and send to the database 

    when getting back the schedule from the database we get the string that we have stored and change it 
    to an object with JSON.parse() method and send to the front end.
*/

//getting all the teachers by the admin
router.get("/get-teachers", (req, res) => {
  let getTeacherSQL = `SELECT * FROM dizinv.user, dizinv.teacher
                       where user.id_user = teacher.id_user`;

  db.query(getTeacherSQL, (err, result) => {
    if (err) {
      res.send({
        status: "FAILED",
        message: "something went wrong fetching data, Try again!!",
      });
      return;
    }
    if (result) {
      let response = result.map((data) => {
        const obj = {
          ...data,
          password: "********",
          id: data.id_user,
          groups: JSON.parse(data.groups),
          sceance: JSON.parse(data.sceance),
        };
        // Sconsole.log(obj);
        return obj;
      });
      //console.log(response)
      res.send({ status: "SUCCESS", result: response });
    }
  });
});

//get list of modules for adding teachers options
router.get("/modules/teacher-form-option", (req, res) => {
  const moduleList = modules.map((module) => ({
    value: `${module.name}`,
    label: `${module.code} - ${module.name} (${module.department})`,
  }));
  res.status(200).send(moduleList);
});

//api for modules>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/modules", (req, res) => {
  //console.log(modules)
  res.status(200).send(modules);
});

router.delete("/delete/module/:department/:code", (req, res) => {
  const { department, code } = req.params;
  console.log(department, code);

  // delete module
  const Module = modules.filter((item) => {
    if (item.department === department && item.code === code) {
      return item;
    }
  });

  //check student if exists
  if (Module.length <= 0) {
    res.send({ status: "NON" });
    return;
  }

  //yes there exists then we delete it here
  modules = modules.filter((item) => {
    //remember to use the code and the department to delete items from the database
    if (item.code !== code) {
      return item;
    }
  });

  res.status(200).send({ status: "SUCCESS" });
  return;
});

router.post("/add-module", (req, res) => {
  const { module, mood } = req.body;
  // console.log(module);

  // check if module exist
  const Module = modules.filter((item) => {
    if (item.id === module.id) {
      return item;
    }
  });

  // No it does not exists and u are adding
  if (Module.length <= 0 && mood === "add") {
    modules.push(module);
    res.send({ status: "SUCCESS", message: "Module Added succefully!!" });
    return;
  }

  // No it does not exists and u want to edit
  if (Module.length <= 0 && mood === "edit") {
    res.send({
      status: "WARN",
      message: "Module-Code doesen't exist, can't edit !!",
    });
    return;
  }

  // Module already exits
  if (Module.length > 0 && mood === "add") {
    res.send({
      status: "WARN",
      message: "Module or Module-code already exits, can't add !!",
    });
    return;
  }

  //yes module exits
  if (Module.length > 0 && mood === "edit") {
    Module[0].code = module.code;
    Module[0].name = module.name;
    Module[0].department = module.department;
    Module[0].level = module.level;
    res.send({ status: "SUCCESS", message: "Module Edited succefully!!" });
    return;
  }

  //failed
  res.send({ status: "NON", message: " Operation failed, try again!!" });
  return;
});

module.exports = router;
