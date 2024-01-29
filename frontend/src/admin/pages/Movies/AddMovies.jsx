import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { FaEye } from "react-icons/fa6";
import CreatableSelect from "react-select/creatable";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import { createMovie } from "../../../redux/slices/movie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
const AddMovies = () => {
  const [validationError, setValidationError] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedDirectors, setSelectedDirectors] = useState([]);
  const [selectedCast, setSelectedCast] = useState([]);
  const [selectedPosters, setSelectedPosters] = useState([]);
  const [selectedTrailers, setSelectedTrailers] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [releaseDate, setReleaseDate] = useState(null);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const shouldRedirect = useSelector((state) => state.movie.shouldRedirect);

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/admin/movies");
    }
  }, [shouldRedirect]);

  const dispatch = useDispatch();

  const genres = [
    { value: "ACTION", label: "Action" },
    { value: "ADVENTURE", label: "Adventure" },
    { value: "ANIMATION", label: "Animation" },
    { value: "BIOGRAPHY", label: "Biography" },
    { value: "COMEDY", label: "Comedy" },
    { value: "CRIME", label: "Crime" },
    { value: "DOCUMENTARY", label: "Documentary" },
    { value: "DRAMA", label: "Drama" },
    { value: "FAMILY", label: "Family" },
    { value: "FANTASY", label: "Fantasy" },
    { value: "HISTORY", label: "History" },
    { value: "HORROR", label: "Horror" },
    { value: "MUSIC", label: "Music" },
    { value: "MUSICAL", label: "Musical" },
    { value: "MYSTERY", label: "Mystery" },
    { value: "ROMANCE", label: "Romance" },
    { value: "SCI_FI", label: "Science Fiction" },
    { value: "SPORT", label: "Sport" },
    { value: "THRILLER", label: "Thriller" },
    { value: "WAR", label: "War" },
    { value: "WESTERN", label: "Western" },
    { value: "CRIME_DRAMA", label: "Crime Drama" },
    { value: "HISTORICAL_FICTION", label: "Historical Fiction" },
    { value: "SUPERHERO", label: "Superhero" },
    { value: "SPY", label: "Spy" },
    { value: "DARK_COMEDY", label: "Dark Comedy" },
    { value: "COURTROOM_DRAMA", label: "Courtroom Drama" },
    { value: "POLITICAL_THRILLER", label: "Political Thriller" },
    { value: "SUSPENSE", label: "Suspense" },
    { value: "APOCALYPTIC", label: "Apocalyptic" },
    { value: "URBAN_FANTASY", label: "Urban Fantasy" },
    { value: "TIME_TRAVEL", label: "Time Travel" },
    { value: "COMING_OF_AGE", label: "Coming of Age" },
    { value: "BIOGRAPHICAL_DRAMA", label: "Biographical Drama" },
    { value: "PSYCHOLOGICAL_THRILLER", label: "Psychological Thriller" },
    { value: "SCI_FI_HORROR", label: "Sci-Fi Horror" },
    { value: "HEIST", label: "Heist" },
  ];

  const directors = [
    "Steven Spielberg",
    "Stanley Kubrick",
    "Alfred Hitchcock",
    "Christopher Nolan",
    "Martin Scorsese",
    "Quentin Tarantino",
    "Francis Ford Coppola",
    "David Lynch",
    "Akira Kurosawa",
    "Federico Fellini",
    "Ingmar Bergman",
    "David Fincher",
    "Orson Welles",
    "Woody Allen",
    "Coen Brothers",
    "Pedro Almodóvar",
    "Spike Lee",
    "Tim Burton",
    "Paul Thomas Anderson",
    "Wong Kar-wai",
    "Hayao Miyazaki",
    "Robert Altman",
    "Roman Polanski",
    "Ridley Scott",
    "James Cameron",
    "Peter Jackson",
    "Billy Wilder",
    "Sidney Lumet",
    "Fritz Lang",
    "Frank Capra",
    "Howard Hawks",
    "John Ford",
    "Charlie Chaplin",
    "George Lucas",
    "Steven Soderbergh",
    "Terrence Malick",
    "John Cassavetes",
    "Jean-Luc Godard",
    "Rainer Werner Fassbinder",
    "François Truffaut",
    "Sergei Eisenstein",
    "Andrei Tarkovsky",
    "Yasujiro Ozu",
    "Vittorio De Sica",
    "Michelangelo Antonioni",
    "Roberto Rossellini",
    "Luis Buñuel",
    "Werner Herzog",
    "D.W. Griffith",
    "Charlie Kaufman",
    "Oliver Stone",
    "Akira Kurosawa",
    "Satoshi Kon",
  ].map((director) => ({ value: director, label: director }));

  const movieCast = [
    "Tom Hanks",
    "Leonardo DiCaprio",
    "Meryl Streep",
    "Brad Pitt",
    "Angelina Jolie",
    "Denzel Washington",
    "Johnny Depp",
    "Cate Blanchett",
    "Robert Downey Jr.",
    "Jennifer Lawrence",
    "Keanu Reeves",
    "Charlize Theron",
    "Will Smith",
    "Natalie Portman",
    "Hugh Jackman",
    "Scarlett Johansson",
    "Matt Damon",
    "Anne Hathaway",
    "Chris Hemsworth",
    "Emma Stone",
  ].map((name) => ({ value: name, label: name }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "60px",
    }),
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];

    if (file) {
      const allowedFileTypes = {
        poster: ["image/jpeg", "image/png"],
        trailer: ["video/mp4", "video/webm"],
        movie: ["video/mp4", "video/webm"],
      };

      if (
        !allowedFileTypes[type] ||
        !allowedFileTypes[type].includes(file.type)
      ) {
        setValidationError(type);
        return;
      }

      setValidationError(null);

      try {
        const imageUrl = URL.createObjectURL(file);
        const fileData = {
          file,
        };
        switch (type) {
          case "poster":
            if (file.type.startsWith("image/")) {
              setSelectedPosters([{ imageUrl, fileData }]);
            } else {
              console.error("Invalid file type for poster");
            }
            break;
          case "trailer":
            setSelectedTrailers([{ imageUrl, fileData }]);
            break;
          case "movie":
            setSelectedMovies([{ imageUrl, fileData }]);
            break;
          default:
            console.error("Invalid file type");
        }
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    } else {
      // Handle the case when no file is selected
      switch (type) {
        case "poster":
          setSelectedPosters([]);
          break;
        case "trailer":
          setSelectedTrailers([]);
          break;
        case "movie":
          setSelectedMovies([]);
          break;
        default:
          console.error("Invalid file type");
      }
    }
  };

  const handleChange = (fieldName) => (newValue, actionMeta) => {
    switch (fieldName) {
      case "genres":
        setSelectedGenres(newValue);
        break;
      case "directors":
        setSelectedDirectors(newValue);
        break;
      case "cast":
        setSelectedCast(newValue);
        break;
      case "releaseDate":
        const date = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`;
        setReleaseDate(date);
        break;
      default:
        console.error("Invalid field name");
    }
  };

  const handleInitialState = () => {
    setValidationError(null);
    setSelectedGenres([]);
    setSelectedDirectors([]);
    setSelectedCast([]);
    setSelectedPosters([]);
    setSelectedTrailers([]);
    setSelectedMovies([]);
    setReleaseDate(null);
  };

  const onSubmit = (data, e) => {
    if (selectedGenres.length === 0) {
      setValidationError("noGenres");
    } else if (selectedDirectors.length === 0) {
      setValidationError("noDirectors");
    } else if (selectedCast.length === 0) {
      setValidationError("noCast");
    } else if (selectedPosters.length === 0) {
      setValidationError("noPoster");
    } else if (selectedTrailers.length === 0) {
      setValidationError("noTrailer");
    } else if (selectedMovies.length === 0) {
      setValidationError("noMovie");
    } else if (releaseDate === null) {
      setValidationError("releaseDate");
    } else {
      const details = {
        title: data.title,
        productionStudio: data.productionStudio,
        genres: selectedGenres,
        directors: selectedDirectors,
        cast: selectedCast,
        poster: selectedPosters[0].fileData.file,
        trailer: selectedTrailers[0].fileData.file,
        movie: selectedMovies[0].fileData.file,
        releaseDate: releaseDate,
        status: data.status,
        description: data.description,
      };

      console.log(details)
      const directorValues = details.directors
        .map((director) => director.value)
        .join(", ");
      const castValues = details.cast.map((cast) => cast.value).join(", ");
      const genresValue = details.genres.map((cast) => cast.value).join(", ");

      const formData = new FormData();
      formData.append("title", details.title);
      formData.append("productionStudio", details.productionStudio);
      formData.append("genres", genresValue);
      formData.append("directors", directorValues);
      formData.append("cast", castValues);
      formData.append("description", details.description);
      formData.append("poster", details.poster);
      formData.append("trailer", details.trailer);
      formData.append("movie", details.movie);
      formData.append("releaseDate", details.releaseDate);
      formData.append("status", details.status);

      try {
        dispatch(createMovie(formData));
      } catch (error) {
        console.error("Error dispatching createMovie:", error);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          margin: "10px 0 auto",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Add Movies</Typography>
          <Button variant="contained" onClick={()=>navigate("/admin/movies")}>
            <FaEye className="text-xl mr-2" />
            View Movies
          </Button>
        </Box>
      </Paper>

      <Paper
        elevation={5}
        sx={{
          padding: "20px",
          margin: "10px auto",
        }}
      >
        <Box
          component="form"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {/* for title and production studio */}
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Box sx={{ width: "100%" }}>
              <label>
                Title:{" "}
                <ErrorMessage
                  errors={errors}
                  name="title"
                  render={({ message }) => (
                    <span className="text-red-500 ">{message}</span>
                  )}
                />
              </label>
              <TextField
                fullWidth
                id="title"
                name="title"
                {...register("title", {
                  required: "Title is Required !!!",
                })}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <label>
                Production studio:{" "}
                <ErrorMessage
                  errors={errors}
                  name="productionStudio"
                  render={({ message }) => (
                    <span className="text-red-500 ">{message}</span>
                  )}
                />
              </label>
              <TextField
                fullWidth
                id="productionStudio"
                name="productionStudio"
                {...register("productionStudio", {
                  required: "Production Studio is Required !!!",
                })}
              />
            </Box>
          </Box>

          {/* for genres */}
          <Box sx={{ width: "100%" }}>
            <label>
              Genres:
              {validationError == "noGenres" ? (
                <>
                  <span className="text-red-500 pl-2">
                    Genres is required !!!
                  </span>
                </>
              ) : null}
            </label>
            <CreatableSelect
              label="genres"
              isMulti
              id="genres"
              name="genres"
              options={genres}
              styles={customStyles}
              onChange={handleChange("genres")}
            />
          </Box>

          {/* for directors */}
          <Box sx={{ width: "100%" }}>
            <label>
              Directors:
              {validationError == "noDirectors" ? (
                <>
                  <span className="text-red-500 pl-2">
                    Directors is required !!!
                  </span>
                </>
              ) : null}
            </label>
            <CreatableSelect
              label="Directors"
              isMulti
              options={directors}
              styles={customStyles}
              onChange={handleChange("directors")}
            />
          </Box>

          {/* for cast */}
          <Box sx={{ width: "100%" }}>
            <label>
              Cast:
              {validationError == "noCast" ? (
                <>
                  <span className="text-red-500 pl-2">
                    Cast is required !!!
                  </span>
                </>
              ) : null}
            </label>
            <CreatableSelect
              label="cast"
              isMulti
              defaultValue={selectedCast}
              onChange={handleChange("cast")}
              options={movieCast}
              styles={customStyles}
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <label>
              Description:{" "}
              <ErrorMessage
                errors={errors}
                name="description"
                render={({ message }) => (
                  <span className="text-red-500 ">{message}</span>
                )}
              />
            </label>
            <TextField
              fullWidth
              id="description"
              name="description"
              multiline
              rows={5}
              {...register("description", {
                required: "Description is Required !!!",
              })}
            />
          </Box>

          {/* FOR UPLOADS */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* for upload of poster */}
            <Box>
              {/* for uploading posters */}
              <label>
                Poster:
                {validationError && (
                  <span>
                    <span className="text-red-500 pl-2">
                      {validationError === "noPoster"
                        ? "Poster is required !!!"
                        : validationError === "poster"
                        ? "Invalid File format !!!"
                        : null}
                    </span>
                  </span>
                )}
              </label>
              <Box
                sx={{
                  position: "relative",
                  width: "300px",
                  height: "300px",
                  border: "1px dashed #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => document.getElementById("poster").click()}
              >
                <input
                  accept="image/*"
                  multiple
                  id="poster"
                  name="poster"
                  type="file"
                  onChange={(e) => {
                    handleFileChange(e, "poster");
                  }}
                  style={{ display: "none" }}
                />

                {selectedPosters.length > 0 && (
                  <div>
                    <img
                      src={selectedPosters[0].imageUrl}
                      alt="Selected Poster"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                )}
                {selectedPosters.length === 0 && (
                  <span
                    style={{
                      position: "absolute",
                      fontSize: "14px",
                      color: "#555",
                    }}
                  >
                    Click to upload poster
                  </span>
                )}
              </Box>
            </Box>

            {/* for uploading Trailer */}
            <Box>
              <label>
                Trailer:
                {validationError === "noTrailer" ? (
                  <>
                    <span className="text-red-500 pl-2">
                      Trailer is required !!!
                    </span>
                  </>
                ) : validationError === "trailer" ? (
                  <>
                    <span className="text-red-500 pl-2">
                      Invalid File format !!!
                    </span>
                  </>
                ) : null}
              </label>
              <Box
                sx={{
                  position: "relative",
                  width: "300px",
                  height: "300px",
                  border: "1px dashed #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => document.getElementById("trailer").click()}
              >
                <input
                  accept="video/*"
                  multiple
                  id="trailer"
                  type="file"
                  onChange={(e) => handleFileChange(e, "trailer")}
                  style={{ display: "none" }}
                />
                {selectedTrailers.length > 0 && (
                  <div>
                    {selectedTrailers.map((trailer, index) => (
                      <div key={index}>
                        <video
                          controls
                          src={selectedTrailers[0].imageUrl}
                          alt={`Selected Trailer ${index + 1}`}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {selectedTrailers.length === 0 && (
                  <span
                    style={{
                      position: "absolute",
                      fontSize: "14px",
                      color: "#555",
                    }}
                  >
                    Click to upload Trailer
                  </span>
                )}
              </Box>
            </Box>

            {/* for uploading Movie */}
            <Box>
              <label>
                Movie:
                <span className="text-red-500 pl-2">
                  {validationError === "noMovie" ? (
                    <>Movie is required !!!</>
                  ) : validationError === "movie" ? (
                    <>Invalid File format</>
                  ) : null}
                </span>
              </label>
              <Box
                sx={{
                  position: "relative",
                  width: "300px",
                  height: "300px",
                  border: "1px dashed #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => document.getElementById("movie").click()}
              >
                <input
                  accept="video/*"
                  multiple
                  id="movie"
                  name="movie"
                  type="file"
                  onChange={(e) => handleFileChange(e, "movie")}
                  style={{ display: "none" }}
                />
                {selectedMovies.length > 0 && (
                  <div>
                    {selectedMovies.map((movie, index) => (
                      <div key={index}>
                        <video
                          controls
                          src={selectedMovies[0].imageUrl}
                          alt={`Selected Movie ${index + 1}`}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {selectedMovies.length === 0 && (
                  <span
                    style={{
                      position: "absolute",
                      fontSize: "14px",
                      color: "#555",
                    }}
                  >
                    Click to upload Movie
                  </span>
                )}
              </Box>
            </Box>
          </Box>

          {/* for release date and status */}
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Box sx={{ width: "100%" }}>
              <label>
                Release Date:{" "}
                <span className="text-red-500 ">
                  {validationError === "releaseDate" ? (
                    <>Release Date is required !!!</>
                  ) : null}
                </span>
              </label>

              <br />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name="releaseDate"
                  sx={{ width: "100%" }}
                  onChange={handleChange("releaseDate")}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ width: "100%" }}>
              <label>
                Status:{" "}
                <ErrorMessage
                  errors={errors}
                  name="status"
                  render={({ message }) => (
                    <span className="text-red-500 ">{message}</span>
                  )}
                />
              </label>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="public"
                  control={<Radio />}
                  label="Public"
                  name="status"
                  {...register("status", {
                    required: "Status is Required !!!",
                  })}
                />
                <FormControlLabel
                  value="private"
                  control={<Radio />}
                  label="Private"
                  name="status"
                  {...register("status", {
                    required: "Status is Required !!!",
                  })}
                />
                <FormControlLabel
                  value="publicOnReleaseDate"
                  control={<Radio />}
                  label="Public on release date"
                  name="status"
                  {...register("status", {
                    required: "Status is Required !!!",
                  })}
                />
              </RadioGroup>
            </Box>
          </Box>

          {/* for buttons */}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
          >
            <Button variant="outlined" sx={{ marginLeft: 1 }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              sx={{ marginLeft: 1 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default AddMovies;
