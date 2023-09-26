import Movies from "../models/movieModel.js";

// to get all the movies
const getMovies = async (req,res) =>{
const movies = await Movies.find({})
res.json(movies)
}

// to get a movie
const getMovie = async (req, res) => {
  const movie = await Movies.findOne(req.params._id);
  if (movie) {
    res.status(200);
    res.json(movie);
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
};

//to delete a movie
const deleteMovie = async (req, res) => {
  const movie = await Movies.findOne(req.params._id);
  if (movie) {
    await Movies.deleteOne();
    res.json({ message: "Movie Removed" });
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
};


// Creating a new Movie
// const newMovie = async (req, res) => {
//   const { title} = req.body;
 

//   if (title) {
//     res.json({
//       message: "Movie already exists !!",
//     });
//   } else{
//     const user = await User.create({
//       username,
//       email,
//       password,
//     });

//     if (user) {
//       res.status(201).json({
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         password: user.password,
//         profilePicture: user.profilePicture,
//         isAdmin: user.isAdmin,
//       });
//     } else {
//       res.status(400);
//       throw new Error("Invalid User Data");
//     }
//   }
// };



export {getMovies,getMovie}