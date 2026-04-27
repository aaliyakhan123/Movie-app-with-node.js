const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieControllers");
const upload = require("../config/multer"); // agar alag file banaya

router.get("/", movieController.getAllMovies);

router.post("/add", upload.single("image"), movieController.addMovie);

router.get("/delete/:id", movieController.deleteMovie);

router.get("/edit/:id", movieController.editPage);

router.post("/update/:id", upload.single("image"), movieController.updateMovie);

module.exports = router;