/** @format */
//It could be in different route files


const { Router } = require("express");
const cors = require('cors')
const {Book} = require("../db")

const router = Router();

router.use(cors())

const booksRouteDB = require("./booksRoute");

router.use("/books", booksRouteDB);






module.exports = router;

