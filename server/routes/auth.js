const express = require("express");

let { users } = require("../temp data/user");

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  if (email && password) {
    const user = users.filter((user) => {
      if (user.email === email && user.password === password) {
        return user;
      }
    });
 
    if (user.length > 0) {
      res
        .status(200)
        .send({
          email: user[0].email,
          type: user[0].type,
          success: true, 
        });
    } else {
      res
        .status(200)
        .send({
          message: "no user with this email and password",
          success: false,
        });
    }
  }
});

module.exports = router;
