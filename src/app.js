import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //setting data receiving limit to 16kb to handle the load
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //The url consist of various symbols in between the query like %20, + etc. To encode that we use
app.use(express.static("public")); // To store the user data like pdfs, files
app.use(cookieParser()); // To access cookie and perform CRUD op on the cookie.

// import routes
import userRouter from "./routes/user.routes.js";

// router declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register

export { app };
