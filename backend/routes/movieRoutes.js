import express from "express";
import {
  getMovie,
  getMovies,
  createMovie,
} from "../controllers/movieController.js";
import { fileUpload } from "../config/fileUpload.js";

const router = express.Router();
const upload = fileUpload();
router
  .route("/")
  .get(getMovies)
  .post(
    upload.fields([
      { name: "trailer",maxCount:1 },
      { name: "movie",maxCount:1 },
      { name: "poster",maxCount:1 },
    ]),
    createMovie
  );

router.route("/:id").get(getMovie);

export default router;
