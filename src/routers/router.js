const express = require('express')
const router = express.Router()
// const {authentication} = require("../middlewares/commonMiddle")
const {loginUser,createUser} = require("../controllers.js/userController")
// const {createBooks, getBook, updateBook, deleteBook,getBookById} = require("../controllers/bookController")

//user
router.post("/register", createUser)
router.post("/login", loginUser)
// ++++++++++++++++++++++//
// //book
// router.post("/books", authentication, createBooks)
// router.get("/books", authentication, getBook)
// router.put("/books/:bookId", authentication, updateBook)
// router.get("/books/:bookId", authentication, getBookById)
// router.delete("/books/:bookId", authentication, deleteBook );


router.all("/*", (req, res) => {
      res.status(400).send({ status: false, message: "This page does not exist, please check your url" })
})

module.exports = router