const Express = require("express");
const router = Express.Router();
const { default: axios } = require("axios");
const { Book } = require("../db");
const { Op } = require("sequelize");

//ruta para obtener los libros
router.get("/", async (req, res) => {
  try {
    const booksDatabase = await Book.findAll();
    
    if (!booksDatabase.length) {
      const url = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q={}&key=AIzaSyC3J4dErWqR63bwO9rBzpMBWrnSIKTmjbk"
        );

      const urlData = await url.data.items;
      const bookyDB = await urlData.forEach((e) => {
        Book.create(booksModel(e));
      });
      res.status(200).json(bookyDB);
    } else {
      res.json(booksDatabase);
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: "something is wrong" });
  }
});

//ruta para buscar por titulo cada libro
router.get("/title", async (req, res) => {
  try {
    const { title } = req.query;

    const booky = await Book.findAll({
      where: {
        title: {
          [Op.iLike]: `%${title}%`,
        },
      },
    });
    
    const searchBook = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyC3J4dErWqR63bwO9rBzpMBWrnSIKTmjbk`
      );
      
      res.status(200).send(searchBook.data.items.concat(booky));
    } catch (error) {
      res.status(404).send({ msg: "The title does not exist" });
      console.log(error);
    }
  });
  

//ruta para buscar por id cada libro
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const info = await Book.findByPk(id);
    res.json({ info });
  } catch (error) {
    console.log(error);
  }
});

//create book
router.post("/", async (req, res) => {
  const {
    title,
    authors,
    description,
    category,
    pagecount,
    imagelink,
    language,
    price,
  } = req.params;
  try {
    const book = await Book.create({
      title,
      authors,
      description,
      category,
      pagecount,
      imagelink,
      language,
      price,
    });
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.json({ msg: "something is wrong" });
  }
});


const booksModel = (e) => {
  const book = {
    id: e.id,
    title: e.volumeInfo.title !== undefined ? e.volumeInfo.title : "no title",
    authors:
      e.volumeInfo.authors?.[0] !== undefined
        ? e.volumeInfo.authors?.[0]
        : "no authors",
    description:
      e.volumeInfo.description !== undefined
        ? e.volumeInfo.description
        : "no description",
    category:
      e.volumeInfo.categories?.[0] !== undefined
        ? e.volumeInfo.categories?.[0]
        : "no category",
    pagecount:
      e.volumeInfo.pageCount !== undefined
        ? e.volumeInfo.pageCount
        : "no pagecount",
    imagelink:
      e.volumeInfo.imageLinks.thumbnail !== undefined
        ? e.volumeInfo.imageLinks.thumbnail
        : "no image",
    language:
      e.volumeInfo.language !== undefined
        ? e.volumeInfo.language
        : "no language",
    price:
      e.saleInfo.listPrice !== undefined
        ? Math.round(e.saleInfo.listPrice.amount)
        : "Free Book",
  };
  return book;
};

module.exports = router;
