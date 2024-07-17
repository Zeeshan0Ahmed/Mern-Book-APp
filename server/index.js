require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/book");
const port = process.env.PORT || 3000;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PATCH", "DELETE"],
  })
);
app.use(express.json());

//routes
app.use("/api/v1/books", router);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(port, () => {
  console.log(`App listening on Port ${port}`);
});
