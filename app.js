const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");

const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//configure express session
app.use(express.urlencoded({ extended: true }));

//connect to database
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
try {
  db.once("open", () => {
    console.log("connected to db");
  });
} catch (error) {
  console.log("Error");
}
db.on("error", (err) => {
  console.log(console.log(err));
});

app.use(bodyParser.urlencoded({ extended: true })); //allow body-parser

//imported routes
const Register = require("./routes/register");
const Login = require("./routes/login");
const PickUpRequest = require("./routes/pickUpRequest");
const Schedule = require("./routes/schedule");

app.get("/", (req, res) => {
  res.send("App running");
});

//api use routes
app.use("/api/register", Register);
app.use("/api/login", Login);
app.use("/api/pickuprequest", PickUpRequest);
app.use("/api/schedule", Schedule);

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
