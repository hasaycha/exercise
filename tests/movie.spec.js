const MovieService = require("../services/movie.service");
const dotenv = require('dotenv');

describe('Movie', () => {
    it('should success search movie', async () => {
        dotenv.config();

        const resp = await MovieService.prototype.searchMovie(Object.assign({}, {s:'Batman', p:5 }))

        expect(resp).toBeTruthy();
        expect(resp.length).toBeGreaterThanOrEqual(5)
    })

    it('should success get detail movie', async () => {
        dotenv.config();

        const resp = await MovieService.prototype.searchMovie(Object.assign({}, {t:'Batman'}))

        expect(resp).toBeTruthy();
        expect(resp.Title).toContain('Batman');
    })
})
