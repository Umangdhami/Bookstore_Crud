const bookModel = require("../model/modelConfig");

const defaultRoute = (req, res) => {
  res.render("index");
};

const creatBook = (req, res) => {
  let books = new bookModel({
    bookname: req.body.bookname,
    bookauthor: req.body.bookauthor,
    pages: req.body.pages,
  });

  books.save();
  res.redirect("/showBook");
};

const showBook = async (req, res) => {
  try {
    let bookData = await bookModel.find();
    res.render("view", { bookData });
  } catch (err) {
    console.log(err);
  }
};

const editBook = async (req, res) => {
  try {
    let editSingleBook = await bookModel.findById(req.params.id);
    res.render("edit", { editSingleBook });
  } catch (err) {
    console.log(err);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id, bookname, bookauthor, pages } = req.body;
    const updateSingleBook = await bookModel.findByIdAndUpdate(id, {
      bookname: bookname,
      bookauthor: bookauthor,
      pages: pages,
    });
    res.redirect("/showBook");
  } catch (err) {
    console.log(err);
  }
};

const deletBook = async (req, res) => {
  try {
    const deletSingaleBook = await bookModel.findByIdAndDelete(req.params.id);
    res.redirect("/showBook");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  defaultRoute,
  creatBook,
  showBook,
  editBook,
  updateBook,
  deletBook,
};
