import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        required:false,
        default:false,
    },
    profilePicture:{
        type:String,
        required:false,
    },
    subscription:{
        type:String,
        enum:['premium','standard'],
        default: 'standard',
    },
    payment:{
        id:{type:String},
        status:{type:String},
        update_time: {type:String}
    }
});

const User = mongoose.model ("User", userSchema)

export default User