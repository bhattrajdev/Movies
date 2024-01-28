import Banner from "../models/bannerModel";
import { deleteFile } from "../config/fileUpload";
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
    const banner = await Banner.create({ ...req.body, banner });

    res.status(201).json({message:'Banner created successfully'});
  } catch (e) {
    res.status(500).json({message:"Internal Server Error"});
    console.log(e);
  }
};

// to update a banner
const updateBanner = async(req,res) =>{

}


export{createBanner,getBanner,getBanners,deleteBanner,updateBanner}