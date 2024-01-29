import mongoose from "mongoose";

const bannerSchema = mongoose.Schema({
    title:{
        type:String
    },
    image:{
        type:String
    },
    link:{
        type:String
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    }
},{timestamps:true})

const Banner = mongoose.model("Banner",bannerSchema)
export default Banner;