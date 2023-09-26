import express from "express";
import { getMovie, getMovies } from "../controllers/movieController.js";

const router = express.Router();

router.route("/").get(getMovies);

router.route("/:id").get(getMovie)

export default router;
