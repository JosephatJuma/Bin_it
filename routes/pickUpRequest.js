const express = require("express");
const router = express.Router();
const Request = require("../models/pickUpRequest");
router.get("/", (req, res) => {
  res.send("Request picp up");
});

router.post("/", async (req, res) => {
  const request = new Request(req.body);
  await request
    .save()
    .then(() => {
      res.json({ message: "Your request has been submited", success: true });
    })
    .catch((err) => {
      res.json({ message: "Uknown error occured!", success: false });
    });
});

module.exports = router;
