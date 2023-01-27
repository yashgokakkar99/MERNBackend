const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
const hbs = require("hbs");
require("./db/conn");

const Register = require("./models/registers");

hbs.registerPartials(partials_path);

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", template_path);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body.fname);
    res.send(req.body.fname);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
