const express = require("express");

let { students } = require("../temp data/students");
let { schedule } = require("../temp data/schedules");
let { teacher } = require("../temp data/teachers");
let { modules } = require("../temp data/modules");

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
router.get("/user-profile/:handler/:id", (req, res) => {
  const { handler, id } = req.params;
  // console.log(handler, id);

  if (handler === "student") {
    res.status(200).send(
      students.filter((item) => {
        return item.inscription === id;
      })
    );
  }
  if (handler === "teacher") {
    res.status(200).send(
      teacher.filter((item) => {
        return item.id === id;
      })
    );
  }
});

// router.delete("/delete/teacher/:id", (req, res) => {
//   const parameter = req.params.id;
//   console.log(parameter);
// })

router.delete("/delete/:handler/:id", (req, res) => {
  const { handler, id } = req.params;
  console.log(handler, id);

  //delet student
  if (handler === "student") {
    const student = students.filter((item) => {
      if (item.inscription === id) {
        return item;
      }
    });

    //check student if exists
    if (student.length <= 0) {
      res.send({ status: "NON" });
      return;
    }

    //yes there exists then we delete it here
    students = students.filter((item) => item.inscription !== id);
    res.status(200).send({ status: "SUCCESS" });
    return;
  }

  //delet teacher
  if (handler === "teacher") {
    const Teachers = teacher.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });

    //check student if exists
    if (Teachers.length <= 0) {
      res.send({ status: "NON" });
      return;
    }

    //yes there exists then we delete it here
    teacher = teacher.filter((item) => item.id !== id);
    res.status(200).send({ status: "SUCCESS" });
    return;
  }
});

router.post("/add-new-student", (req, res) => {
  const { values } = req.body;
  //  console.log(values);
  if (values) {
    students.push(values);
    res.status(200).send({ status: "SUCCESS" });
    return;
  }

  res.send({ status: "FAILED" });
  return;
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

router.get("/get-teachers", (req, res) => {
  res.status(200).send(teacher);
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
