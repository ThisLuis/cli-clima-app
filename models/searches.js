


class Search {

    history = [ '' ];
    dbPath = './db/database.json';

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

    get paramsOpenWeather() {
        return {
            'lang': 'es',
            'units': 'metric',
            'appid': process.env.OPENWEATHER_KEY,
        }
    }

    async city( place = '' ) {

        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: this.paramsMapBox
            });

            const response = await instance.get();

            return response.data.features.map( place => (
                {
                    id: place.id,
                    name: place.place_name,
                    lng: place.center[0],
                    lat: place.center[1],
                }
            ));

        } catch ( error ) {
            return []
        }
    }


    async weatherByPlace( lat, lon ) {
        try {
            // instance axios.create
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsOpenWeather , lat, lon },
            });

            const response = await instance.get();
            const { weather, main } = response.data;
        
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
            }
        } catch (error) {
            console.log( error );
        }
    }

    addHistory( place = '') {
        // TODO: Prevenir duplicados
        if ( this.history.includes( place.toLocaleLowerCase())) {
            return;
        }

        this.history.unshift( place );

        // Save DB
        this.saveDB();
    }

    saveDB() {
        const payload = {
            history: this.history,
        };

        fs.writeFileSync(this.dbPath, JSON.stringify( payload ));
    }

    readDB() {

    }
    
}

export default Search;