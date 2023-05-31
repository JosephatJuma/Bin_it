const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");
const session = require("express-session");
const cors = require("cors");
const hostname = "0.0.0.0";
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//configure express session
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "Token", resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, "public")));
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

app.get("/", (req, res) => {
  res.send("App running");
});

//use routes
app.use("/api/register", Register);
app.listen(hostname, port, () => {
  console.log(`app running on ${port}`);
});
