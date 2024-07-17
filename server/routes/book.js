const express = require("express");
const {
  createBook,
  getAllbooks,
  updatebook,
  getbook,
  deletebook,
} = require("../controllers/book");
const router = express.Router();

router.post("/add", createBook);
router.get("/", getAllbooks);
router.patch("/:id", updatebook);
router.delete("/:id", deletebook);
router.get("/:id", getbook);
module.exports = router;
