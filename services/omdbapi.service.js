const axios = require('axios');
class OmdbapiService {
    async searchMovie(searchMovieDto){
        const {data} = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY_OMDB}`, {
            params: searchMovieDto
        });

        return data ? data.Search : null;
    }
}

module.exports = OmdbapiService
