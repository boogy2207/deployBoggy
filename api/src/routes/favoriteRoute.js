//favorite route    

const { Router } = require('express');
const router = Router();
const { Favorite } = require('../db');
const { Book } = require('../db');
const { User } = require('../db');
const favoriteControllers =  { getFavorites, getFavoriteById, createFavorite, deleteFavorite } = require('../controllers/favorite');

router.get('/', favoriteControllers.getFavorites);
router.get('/:id', favoriteControllers.getFavoriteById);
router.post('/', favoriteControllers.createFavorite);
router.delete('/:id', favoriteControllers.deleteFavorite);

module.exports = router;
