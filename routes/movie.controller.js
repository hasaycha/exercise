const express = require('express');
const router = express.Router();
const MovieService = require("../services/movie.service");
const SearchMovieDto = require("../services/request/search-movie.dto");

router.use(function timeLog (req, res, next) {
    const startTime = Date.now();
    next();
    console.log(`Response Time: ${ Date.now() - startTime} ms`);
});

router.get('/search', function(req, res) {
    console.log(req.query);
    const a = MovieService.prototype.searchMovie(Object.assign(new SearchMovieDto(), req.query));
    console.log(a);
    res.json({ message: 'hooray! welcome to our rest video api!' });
});
router.get('/detail', function(req, res) {
    res.json({ message: 'hooray! welcome to our rest video api!' });
});


module.exports = router;
