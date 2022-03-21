const express = require("express");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const replace = require("replace-in-file");

let { users } = require("../temp data/user");

const JWT_SECRET = "i love my mum the most.....";

const router = express.Router();

//this is for sending email and we have a middleware i.e send
router.post("/forgot", send, (req, res) => {});

function send(req, res, next) {
  const { email } = req.body;

  //make sure user exists in the database
  const user = users.filter((item) => {
    if (item.email === email) {
      return item;
    }
  });

  if (user.length <= 0) {
    res.send({ status: "NON" });
    return;
  }

  //user exists so we create a one time link valid for 10 mins
  const secret = JWT_SECRET + user[0].password;
  const payload = {
    email: user[0].email,
    type: user[0].type,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "10m" });

  //generating a link
  const link = `http://localhost:3000/reset-password/${user[0].email}/${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ndubuisi.eze@univ-constantine2.dz",
      pass: "Fh5Am1Vw4",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //things to change initially before sending
  const Before = {
    files: "./public/index.html",
    from: /TheLinkToReplaceFromToken/g, //regex to regcognice what to change
    to: link,
  };

  //things to chage finally after sending
  const After = {
    files: "./public/index.html",
    from: link, //string to regcognice what to change
    to: "TheLinkToReplaceFromToken",
  };

  //change the file to be sent to the user and reverts it back to original
  replace(Before)
    .then((changedFiles) => {
      const file = changedFiles[0].file;
      fs.readFile(file, null, (err, data) => {
        if (err) {
          res.send({ status: "FAILED" });
          return console.log(err);
        }

        let details = {
          from: "ndubuisi.eze@univ-constantine2.dz",
          to: email,
          subject: "DizInv Password Reset",
          html: data,
        };

        transporter.sendMail(details, (err, info) => {
          if (err) {
            console.log(err);
            res.send({ status: "FAILED" });
            return;
          }
          if (info) {
            //change file back to the original i.e TheLinkToReplaceFromToken
            replace(After)
              .then((changedFiles) => {
                console.log(changedFiles);
                res.send({ status: "SUCCESS" });
              })
              .catch((err) => {
                res.send({ status: "FAILED" });
                return;
              });
          }
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: "FAILED" });
      return;
    });
}

router.get("/reset-password/:email/:token", (req, res) => {
  const { email, token } = req.params;

  //check if email exist in database
  const user = users.filter((item) => {
    if (item.email === email) {
      return item;
    }
  });

  if (user.length <= 0) {
    res.send({ status: "NON" });
    return;
  }

  //we have a user with this email
  const secret = JWT_SECRET + user[0].password;
  try {
    const payload = jwt.verify(token, secret);
    res.send({ status: "SUCCESS" });
  } catch (error) {
    console.log(error.message);
    res.send({ status: "NON" });
  }
});

router.post("/reset-password/:email/:token", (req, res) => {
  const { email, token } = req.params;
  const { password, confirmPassword } = req.body;

  //check if email exist in database
  const user = users.filter((item) => {
    if (item.email === email) {
      return item;
    }
  });

  if (user.length <= 0) {
    res.send({ status: "NON" });
    return;
  }

  const secret = JWT_SECRET + user[0].password;
  try {
    const payload = jwt.verify(token, secret);

    //now we validate password and comfirm password

    //find the user with the payload and update thier password
    //always hash passwiard before saving
    user[0].password = password;
    res.send({ status: "SUCCESS", user: user[0] });
  } catch (error) {
    console.log(error.message);
    res.send({ status: "NON" });
  }
});

module.exports = router;
