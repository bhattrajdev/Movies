import express from "express";
import { fileUpload } from "../config/fileUpload.js";
import { getBanner,deleteBanner,getBanners,createBanner,updateBanner } from "../controllers/bannerController.js";

const router = express.Router();
const upload = fileUpload();

router
  .route("/")
  .get(getBanners)
  .post(
    upload.fields([
      { name: "image", maxCount: 1 },
    ]),
    createBanner
  );
router.route('/:id').get(getBanner).put(updateBanner).delete(deleteBanner)

export default router;
