const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.get("/account", (req, res) => {
  res.send("Register Route");
});

router.post("/", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  const user_data = req.body;
  user_data.password = hashPassword;
  user_data.verified = false;
  const user = new User(user_data);
  user
    .save()
    .then(() => {
      res.send("Your account has been created successfully");
    })
    .catch((err) => {
      res.send("Unknown error occured!");
    });
});

module.exports = router;
