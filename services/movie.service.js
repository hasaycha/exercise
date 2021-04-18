const OmdbapiService = require("../services/omdbapi.service");

class MovieService {
    async searchMovie(findMovieBy){
        return await OmdbapiService.prototype.findMovie(findMovieBy);
    }
}

module.exports = MovieService
