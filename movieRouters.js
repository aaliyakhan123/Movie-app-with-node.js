const express = require("express");
const multer = require("multer");
const path = require("path");
const movieController = require("../controllers/movieControllers");

const router = express.Router();
const uploadPath = path.join(__dirname, "..", "public", "assets", "uploads");

const storage = multer.diskStorage({
  destination: uploadPath,
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, "-");
    cb(null, `${Date.now()}-${safeName}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) return cb(null, true);
  cb(new Error("Only image files are allowed"));
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }
});

const movieImages = upload.fields([
  { name: "poster", maxCount: 1 },
  { name: "banner", maxCount: 1 }
]);

router.get("/", movieController.homePage);
router.get("/view-all", movieController.viewAll);
router.get("/add", movieController.addForm);
router.post("/add", movieImages, movieController.addMovie);
router.get("/edit/:id", movieController.editForm);
router.post("/update/:id", movieImages, movieController.updateMovie);
router.post("/delete/:id", movieController.deleteMovie);
router.get("/movie/:id", movieController.movieDetail);

module.exports = router;
