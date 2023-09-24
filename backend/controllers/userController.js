import User from "../models/userModel.js";

// getting all the users
const getUsers = async (req,res) =>{
  const users =   await User.find({})
  res.json(users)
}


// getting a single user
const getUser = async (req,res) => {
  const user = await User.findOne(req.params._id)
  if(user){
    res.status(200)
     res.json(user);
  }else{
    res.status(404)
    throw new Error('User not found')
  }
}

// deleting a user
const deleteUser = async (req,res) =>{
    const user = await User.findOne(req.params._id);
    if (user) {
        await User.deleteOne()
        res.json({message:'user Removed'})
    } else {
      res.status(404);
      throw new Error("User not found");
    }
}

export {getUsers,getUser,deleteUser}

