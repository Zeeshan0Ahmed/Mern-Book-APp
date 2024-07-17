const bookModel = require("../models/book");

exports.createBook = async (req, resp) => {
  try {
    const data = req.body;
    const result = await bookModel.create(data);
    resp.status(201).json({
      status: "success",
      result,
    });
  } catch (error) {
    resp.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.getAllbooks = async (req, resp) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query.category };
    }
    let result = await bookModel.find(query);
    //    console.log(result)
    resp.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    resp.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.updatebook = async (req, resp) => {
  try {
    const id = req.params.id;
    const updatedBookData = req.body;
    const filter = { _id: new Object(id) };
    const updatedDOc = {
      $set: {
        ...updatedBookData,
      },
    };
    const result = await bookModel.updateOne(filter, updatedDOc);
    resp.status(201).json({
      status: "success",
      result,
    });
  } catch (error) {
    resp.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.deletebook = async (req, resp) => {
  try {
    const id = req.params.id;
    const filter = { _id: new Object(id) };
    const result = await bookModel.deleteOne(filter);
    console.log(result);
    resp.status(204).json({
      status: "success",
      message: "book deleted successfully",
      result,
    });
  } catch (error) {
    resp.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.getbook = async (req, resp) => {
  try {
    const id = req.params.id;
    const result = await bookModel.findOne(id);
    resp.status(204).json({
      status: "success",
      result,
    });
  } catch (error) {
    resp.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
