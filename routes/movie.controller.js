const express = require("express");
const MovieService = require("../services/movie.service");
const asyncMiddleware = require("../utils/async-middleware");
const router = express.Router();

router.use(function timeLog (req, res, next) {
    const startTime = Date.now();
    next();
    console.log(`Response Time: ${ Date.now() - startTime} ms`);
});

router.get('/search', asyncMiddleware(async (req, res, next) => {
    res.json(await MovieService.prototype.searchMovie(Object.assign({}, req.query)));
}));
router.get('/detail', async (req, res) => {
    res.json({ message: 'hooray! welcome to our rest video api!' });
});


module.exports = router;
