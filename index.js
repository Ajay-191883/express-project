const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const staticPath = path.join(__dirname, "/public");
const pagesPath = path.join(__dirname, "/views/pages");
const partialPath = path.join(__dirname, "/views/partials");

app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", pagesPath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index", {
    name: "Ajay Kumar",
  });
});

app.get("/", (req, res) => {
  res.end("Hello Guys!");
});
app.get("/about", (req, res) => {
  res.end("About Guys!");
});
app.get("/contact", (req, res) => {
  res.end("Contact Guys!");
});

app.get("*", (req, res) => {
  res.render("404", {
    error: "This page doesn't EXIST!",
    name: "Ajay Kumar",
  });
});

app.listen(8000, "localhost", () => {
  console.log("Listening");
});
