import express from "express";

import { fileUpload } from "../config/fileUpload.js";

const router = express.Router();
const upload = fileUpload();


export default router;
