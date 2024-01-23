import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// User login
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  try {
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: token,
      });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

// getting all the users
const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

// getting a single user
const getUser = async (req, res) => {
  const user = await User.findOne(req.params.id);
  if (user) {
    res.status(200);
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};



// deleting a user
const deleteUser = async (req, res) => {
  const user = await User.findOne(req.params._id);
  if (user) {
    await User.deleteOne();
    res.json({ message: "user Removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

// Creating a new User
const newUser = async (req, res) => {
  const { username, email, password } = req.body;
  const checkUserName = await User.findOne({ username });
  const checkEmail = await User.findOne({ email });

  if (checkUserName) {
    res.json({
      message: "Username already exists !! please choose a new user name",
    });
  } else if (checkEmail) {
    res.json("User already exits");
  } else {
    const user = await User.create({
      username,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
        profilePicture: user.profilePicture,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  }
};


// updating a user



export { getUsers, getUser, deleteUser, newUser, authUser };
