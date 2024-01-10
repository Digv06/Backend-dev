// require("dotenv").config({path:"./env"}); breaks the code consistency

import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failure!", err);
  });

/*
First approach using Try-Catch


import express from "express";

const app = express();

(async () => {  // async is used because of the DB is in another continent
  try {
    await mongoose.connect(`${procees.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App listening on Port: ${preocees.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
})(); */
