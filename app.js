const express = require("express");
const app = express();
const host = "0.0.0.0";
const port = 3000;
//imported routes
const Register = require("./routes/register");

app.get("/", (req, res) => {
  res.send("App running");
});

//use routes
app.use("/register", Register);
app.listen(port, () => {
  console.log(`app running on ${port}`);
});
