
import Movies from "../models/movieModel.js";

// to get all the movies
const getMovies = async (req,res) =>{
const movies = await Movies.find({})
res.json(movies)
}




// to get a movie
const getMovie = async (req, res) => {
  const movie = await Movies.findById(req.params.id);
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
  try {
    console.log(req.params.id)
    const movie = await Movies.findById(req.params.id);

    console.log(movie)
    if (movie) {
      await movie.deleteOne();
      res.status(200).json({ message: "Movie Removed" });
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// to create a movie
const createMovie = async (req, res) => {
  try {
console.log(req.body)
      let poster = "";
      let movies = "";
      let trailer = "";
      if (req.file) {
       poster  = req.file.poster;
       movies = req.file.movie;
       trailer = req.file.trailer;
      }

      const newMovie = await Movies.create({
        ...req.body,
        poster,
        movies,
        trailer
      });

      res.status(201).json(newMovie);
    }
   catch (error) {
    console.error("Error creating job application:", error);
    res.status(500).json({
      error:
        error,
    });
   }
};



export { getMovies, getMovie, createMovie, deleteMovie };