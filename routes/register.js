const express = require("express");
const router = express.Router();

router.get("/account", (req, res) => {
  res.send("Register Route");
});

router.post("/", (req, res) => {
  console.log(req.body);
});
module.exports = router;
