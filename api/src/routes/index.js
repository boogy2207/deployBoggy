/** @format */
//It could be in different route files
const bodyParser = require('body-parser')


const express = require("express");
const { Router } = require("express");
const cors = require('cors')
const {Book} = require("../db")
const {User} = require("../db")
const router = Router();

const app = express()
router.use(cors())
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
const booksRouteDB = require("./booksRoute");
const usersRouteDB = require("./userRouter");

router.use("/books", booksRouteDB);
router.use("/user", usersRouteDB);





module.exports = router;