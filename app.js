const express = require("express");
const fs = require("fs");
const path = require("path");
const connectDB = require("./config/db");
const movieRoutes = require("./router/movieRouters");

const app = express();
const uploadsPath = path.join(__dirname, "public", "assets", "uploads");

connectDB();

if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

app.use("/", movieRoutes);

app.use((req, res) => {
  res.status(404).render("index", { movies: [], movieCount: 0, trendingMovies: [] });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send(error.message || "Something went wrong");
});

module.exports = app;
