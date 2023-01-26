// review controllers
const { Review } = require('../db');
const { Book } = require('../db');
const { User } = require('../db');

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll({
        include: [Book, User],
        });
        res.json(reviews);
    } catch (error) {
        console.log(error);
    }
    }

const getReviewById = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.findByPk(id, {
        include: [Book, User],
        });
        res.json(review);
    } catch (error) {
        console.log(error);
    }
    }

const createReview = async (req, res) => {
    const { userId, bookId, rating, description } = req.body;
    try {
        const review = await Review.create({
        userId,
        bookId,
        rating,
        description,
        });
        res.json(review);
    } catch (error) {
        console.log(error);
    }
    }

const updateReview = async (req, res) => {

    const { id } = req.params;
    const { rating, description } = req.body;
    try {
        const review = await Review.update(
        { rating, description },
        { where: { id } }
        );
        res.json(review);
    } catch (error) {
        console.log(error);
    }
    }

const deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.destroy({ where: { id } });
        res.json(review);
    } catch (error) {
        console.log(error);
    }
    }

module.exports = {
    getReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
    };
    


