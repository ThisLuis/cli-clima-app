import axios from 'axios';

class Search {

    history = [ '' ];

    constructor() {
        // TODO: Create BD
    }

    async city( place = '' ) {
        // console.log( 'City', place );
        try {
            const response = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/tegucigalpa.json?proximity=ip&language=es&access_token=pk.eyJ1IjoieW9zb3lsdWlzIiwiYSI6ImNsZncybGZ1NjAzM3AzZXA2bmhmcHo2ajIifQ.uaBkbzwL6vKSXMRGNtCxRQ');
            console.log( response.data );
        } catch ( error ) {
            return []
        }
    }
    
}

export default Search;