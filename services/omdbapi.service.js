const axios = require('axios');
class OmdbapiService {
    async findMovie(searchMovie){
        let {data} = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY_OMDB}`, {
            params: searchMovie
        });

        if(data.hasOwnProperty('Search')){
            data = data.Search;
        }

        return data;
    }
}

module.exports = OmdbapiService
