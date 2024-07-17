const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  bookDescription: {
    type: String,
  },
  bookPdfUrl: {
    type: String,
  },
});

const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
