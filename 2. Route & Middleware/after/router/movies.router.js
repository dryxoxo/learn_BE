const express = require("express");
const router = express.Router();
const {getMovies, findMovies, addMovies} = require("../controller/moviesController")


router.get("/", getMovies);

router.get("/:id", findMovies);

router.post("/", addMovies)

module.exports = router;
