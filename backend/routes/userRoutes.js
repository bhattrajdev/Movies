import express from "express";
import {
  getUsers,
  getUser,
  deleteUser,
  newUser,
  authUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes realted to users
router.route("/").get(getUsers).post(newUser);

// for user login
router.route("/login").post(authUser);

// Routes realted to user
router.route("/:id").get(getUser).delete(deleteUser);

export default router;
