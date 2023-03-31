import axios from 'axios';

class Search {

    history = [ '' ];

    constructor() {
        // TODO: Create BD
    }

    get paramsMapBox() {
        return {
            'language': 'es',
            'access_token': process.env.MAPBOX_key,
            'limit': 5,
        }
    }

    async city( place = '' ) {

        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: this.paramsMapBox
            });

            const response = await instance.get();
            console.log( response.data );

        } catch ( error ) {
            return []
        }
    }
    
}

export default Search;