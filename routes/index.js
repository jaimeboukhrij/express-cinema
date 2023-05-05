const express = require('express');
const router = express.Router();
require('../db')


const Movie = require('./../models/movie.model')


/* GET home page */
router.get("/", (req, res) => {
    Movie
        .find()
        .then(movies => res.render("index", movies))
        .catch(err => console.log(err))
})

module.exports = router;
