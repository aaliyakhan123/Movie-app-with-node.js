const fs = require("fs");
const path = require("path");
const Movie = require("../models/movieSchema");

const uploadsDir = path.join(__dirname, "..", "public", "assets", "uploads");

const defaultMovies = [
  {
    title: "Dhurandhar",
    genre: "Action",
    poster: "/assets/images/default-dhurandhar.png",
    isDefault: true
  },
  {
    title: "Toaster",
    genre: "Comedy",
    poster: "/assets/images/default-toaster.png",
    isDefault: true
  },
  {
    title: "Youth",
    genre: "Drama",
    poster: "/assets/images/default-youth.png",
    isDefault: true
  },
  {
    title: "Border 2",
    genre: "Action",
    poster: "/assets/images/default-border2.png",
    isDefault: true
  }
];

const removeUpload = (fileName) => {
  if (!fileName) return;

  const filePath = path.join(uploadsDir, fileName);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

const moviePayload = (body, files = {}) => {
  const payload = {
    title: body.title,
    genre: body.genre,
    releaseYear: body.releaseYear || undefined,
    duration: body.duration,
    rating: body.rating || undefined,
    language: body.language,
    director: body.director,
    cast: body.cast,
    description: body.description,
    isTrending: body.isTrending === "on"
  };

  if (files.poster?.[0]) payload.poster = files.poster[0].filename;
  if (files.banner?.[0]) payload.banner = files.banner[0].filename;

  return payload;
};

exports.homePage = async (req, res, next) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    const trendingMovies = movies.filter((movie) => movie.isTrending).slice(0, 8);
    const displayMovies = trendingMovies.length ? trendingMovies : movies.slice(0, 8);

    res.render("index", {
      movies,
      movieCount: movies.length || defaultMovies.length,
      trendingMovies: displayMovies.length ? displayMovies : defaultMovies
    });
  } catch (error) {
    next(error);
  }
};

exports.viewAll = async (req, res, next) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.render("viewAll", { movies });
  } catch (error) {
    next(error);
  }
};

exports.addForm = (req, res) => {
  res.render("add");
};

exports.addMovie = async (req, res, next) => {
  try {
    await Movie.create(moviePayload(req.body, req.files));
    res.redirect("/view-all");
  } catch (error) {
    next(error);
  }
};

exports.editForm = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.redirect("/view-all");

    res.render("edit", { movie });
  } catch (error) {
    next(error);
  }
};

exports.updateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.redirect("/view-all");

    const payload = moviePayload(req.body, req.files);

    if (payload.poster) removeUpload(movie.poster);
    if (payload.banner) removeUpload(movie.banner);

    await Movie.findByIdAndUpdate(req.params.id, payload, { runValidators: true });
    res.redirect("/view-all");
  } catch (error) {
    next(error);
  }
};

exports.deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if (movie) {
      removeUpload(movie.poster);
      removeUpload(movie.banner);
    }

    res.redirect("/view-all");
  } catch (error) {
    next(error);
  }
};

exports.movieDetail = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.redirect("/view-all");

    res.render("movieDetail", { movie });
  } catch (error) {
    next(error);
  }
};
