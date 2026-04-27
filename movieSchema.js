const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    genre: {
      type: String,
      trim: true
    },
    releaseYear: Number,
    duration: String,
    rating: {
      type: Number,
      min: 0,
      max: 10
    },
    language: String,
    director: String,
    cast: String,
    description: String,
    poster: String,
    banner: String,
    isTrending: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
