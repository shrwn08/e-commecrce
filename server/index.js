const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://shrwn08:Shrawan123@cluster0.ohju8.mongodb.net/")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.error(error));

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:3000/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);


app.use(cookieParser());
app.use(express.json());


app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`));
