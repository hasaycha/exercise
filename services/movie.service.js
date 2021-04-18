const OmdbapiService = require("../services/omdbapi.service");

class MovieService {
    async searchMovie(searchMovie){
        if(!searchMovie.hasOwnProperty('s')) {
            throw new Error('missing required property');
        }
        return await OmdbapiService.prototype.searchMovie(searchMovie);
    }
}

module.exports = MovieService
