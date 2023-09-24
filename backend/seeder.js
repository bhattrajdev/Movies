import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";
import { faker } from "@faker-js/faker";


dotenv.config();

connectDB();

// deleting all the previous data
const deletaAll = async () =>{
    try{
        await User.deleteMany()
        console.log('Previous data deleted successfully')
    }catch(error){
        console.log(error)
    }
}



const fakeData = async () => {
  try {

    // Generate fake user data
    const fakeUsers = Array.from({ length: 10 }, () => {
      const user = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        isAdmin: faker.datatype.boolean(),
        profilePicture: faker.image.avatar(),
        subscription: faker.helpers.arrayElement(["premium", "standard"]),
        payment: {
          id: faker.number.int(),
          status: faker.helpers.arrayElement(["success", "failed"]),
          update_time: faker.date.recent(),
        },
      };
      return user;
    });

    // Insert the fake user data into the User model
    await User.insertMany(fakeUsers);

    console.log("Fake data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } 
};

// deleting all previous data
deletaAll()

// calling the function to insert data using loop
fakeData()

