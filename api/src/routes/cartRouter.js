const Express = require("express");
const router = Express.Router();
const { Cart } = require("../db");



// create cart
router.post("/", async (req, res) => {
    const { userId } = req.body;
    const cart = await Cart.create({ userId });
    res.json(cart);
});


// get cart
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const cart = await Cart.findByPk(id, {
        include: ["books"],
    });
    res.json(cart);
});
// add book to cart
router.post("/:id", async (req, res) => {
    const { id } = req.params;
    const { bookId } = req.body;
    const cart = await Cart.findByPk(id);
    await cart.addBook(bookId);
    res.json(cart);
});


// remove book from cart
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { bookId } = req.body;
    const cart = await Cart.findByPk(id);
    await cart.removeBook(bookId);
    res.json(cart);
});