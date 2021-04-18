const express = require("express");
const MovieService = require("../services/movie.service");
const asyncMiddleware = require("../utils/async-middleware");
const router = express.Router();

router.use(function timeLog (req, res, next) {
    const startTime = Date.now();
    next();
    console.log(`Response Time: ${ Date.now() - startTime} ms`);
});

router.get('/search', asyncMiddleware(async (req, res) => {
    if(!req.query || (req.query && !req.query.hasOwnProperty('s'))) {
        throw new Error('missing required property');
    }

    res.json(await MovieService.prototype.searchMovie(Object.assign({}, req.query)));
}));
router.get('/detail', async (req, res) => {
    if(!req.query || (req.query && !req.query.hasOwnProperty('i') && !req.query.hasOwnProperty('t'))) {
        throw new Error('missing required property');
    }

    res.json(await MovieService.prototype.searchMovie(Object.assign({}, req.query)));
});


module.exports = router;
