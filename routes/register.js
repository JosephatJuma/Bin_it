const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.get("/account", (req, res) => {
  res.send("Register Route");
});

router.post("/", async (req, res) => {
  await User.findOne({
    $or: [{ email: req.body.email }, { phone_number: req.body.phone_number }],
  }).then(async (user_exits) => {
    if (user_exits) {
      res.json({
        message: "User with email or phone number given already exists!",
        success: false,
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      const user_data = req.body;
      user_data.password = hashPassword;
      user_data.verified = false;
      const user = new User(user_data);
      user
        .save()
        .then(() => {
          res.json({
            message: "Your account has been created successfully",
            success: true,
          });
        })
        .catch((err) => {
          res.json({
            message: "Unknown error occured!",
            success: false,
          });
        });
    }
  });
});

module.exports = router;
