import Banner from "../models/bannerModel.js";
import { deleteFile } from "../config/fileUpload.js";
// To get all the banners
const getBanners = async (req, res) => {
  try {
    const banner = await Banner.find({});
    if (banner) {
      res.status(200).json(banner);
    } else {
      res.status(500).json({ message: "Error fetching Banner" });
    }
  } catch (e) {
    res.status(500);
    console.log(e);
  }
};

// To get a banner
const getBanner = async (req, res) => {
  try {
    const id = req.params.id;
    const banner = await Banner.findById(id);
    if (banner) {
      req.status(200).json(banner);
    } else {
      res.status(404).json({ message: "Banner not foun" });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(e);
  }
};

// To delete a banner
const deleteBanner = async (req, res) => {
  try {
    const id = req.params.id;
    const banner = await Banner.findById(id);
    if (banner) {
        const imageLink = `public/${banner.image}`;
        deleteFile(imageLink)
      banner.deleteOne();

      res.status(200).json({message:"Banner deleted successfully"})
    } else {
      res.status(404).json({ message: "Banner not found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(e);
  }
};

// to create a banner
const createBanner = async (req, res) => {
  try {
    let image = "";

    if (req.files) {
      image = req.files.image[0].filename || "";
    }

     await Banner.create({ ...req.body, image });

    res.status(201).json({ message: "Banner created successfully" });
  } catch (error) {
    console.error("Error in createBanner:", error);

    if (error.name === "ValidationError") {
      // Handle validation errors (e.g., required fields missing)
      res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    } else if (error.name === "MongoError" && error.code === 11000) {
      // Handle duplicate key error (e.g., unique constraint violation)
      res.status(409).json({ message: "Duplicate key error" });
    } else {
      // Handle other internal server errors
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};


// to update a banner
const updateBanner = async (req, res) => {
  try {
    const id = req.params.id;

    // Check if the banner exists
    const banner = await Banner.findById(id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    // Update the banner
    const { image, ...updateData } = req.body;

    if (req.file) {
      updateData.image = req.files.image[0].filename || "";
    }

    await banner.updateOne(updateData);

    res.status(200).json({ message: "Banner updated successfully" });
  } catch (error) {
    console.error("Error in updateBanner:", error);

    if (error.name === "ValidationError") {
      // Handle validation errors (e.g., required fields missing)
      res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    } else {
      // Handle other internal server errors
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export { createBanner, getBanner, getBanners, deleteBanner, updateBanner };
