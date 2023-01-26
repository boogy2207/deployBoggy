//Favorite controllers

const { Favorite } = require('../db');
const { Book } = require('../db');
const { User } = require('../db');

const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.findAll({
        include: [Book, User],
        });
        res.json(favorites);
    } catch (error) {
        console.log(error);
    }
    }

const getFavoriteById = async (req, res) => {
    const { id } = req.params;
    try {
        const favorite = await Favorite.findByPk(id, {
        include: [Book, User],
        });
        res.json(favorite);
    } catch (error) {
        console.log(error);
    }
    }

const createFavorite = async (req, res) => {
    const { userId, bookId } = req.body;
    try {
        const favorite = await Favorite.create({
        userId,
        bookId,
        });
        res.json(favorite);
    } catch (error) {
        console.log(error);
    }
    }

const deleteFavorite = async (req, res) => {
    const { id } = req.params;
    try {
        const favorite = await Favorite.destroy({ where: { id } });
        res.json(favorite);
    } catch (error) {
        console.log(error);
    }
    }

module.exports = {
    getFavorites,
    getFavoriteById,
    createFavorite,
    deleteFavorite,
};

