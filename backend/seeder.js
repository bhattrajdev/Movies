import mongoose from "mongoose";
import User from "./models/userModel.js";
import Movies from "./models/movieModel.js";
import { faker } from "@faker-js/faker";

import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const fakeData = async () => {
  try {
    // Generate fake user data
    const fakeUsers = Array.from({ length: 1 }, () => {
      const user = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        isAdmin: faker.datatype.boolean(),
        profilePicture: faker.image.avatar(),
        payment: {
          id: faker.number.int(),
          status: faker.helpers.arrayElement(["success", "failed"]),
          update_time: faker.date.recent(),
        },
      };
      return user;
    });

    // Generate fake data for movies
    const fakeMovies = Array.from({ length: 4 }, () => {
      const movie = {
        title: faker.lorem.words(5),
        description: faker.lorem.paragraph(),
        releaseDate: faker.date.past(),
        genres: [
          faker.helpers.arrayElement(["Action", "Drama", "Comedy", "Sci-Fi"]),
        ],
        directors: [faker.person.fullName()],
        cast: [
          faker.person.fullName(),
          faker.person.fullName(),
          faker.person.fullName(),
        ],
        trailer: faker.internet.url(),
        poster: faker.image.urlPicsumPhotos(),
        runningTime: `${faker.number.float({
          min: 90,
          max: 180,
          precision: 0.001,
        })} minutes`,
        productionStudio: faker.company.buzzPhrase(),
      };
      return movie;
    });

    // feeding the fake data into the database
    await User.insertMany(fakeUsers);
    await Movies.insertMany(fakeMovies)

    console.log("Fake data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};


// deleting  all the previous data and then inserting it
const deleteAndInsertData = async () => {
  try {
    // Delete all previous data
    await User.deleteMany();
    await Movies.deleteMany();
    console.log("Previous data deleted successfully");

    // Generate and insert new fake data
    await fakeData();

    console.log("Fake data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};



deleteAndInsertData();
