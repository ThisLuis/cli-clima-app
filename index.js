import * as dotenv from 'dotenv';
dotenv.config();

import { inquirerMenu, pause, readInput, listPlaces } from './helpers/inquirer.js';
import Search from './models/searches.js';

console.log(process.env.MAPBOX_key);

const main = async() => {
   
    const searches = new Search();
    let opt;
    
    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case 1:
                const search_term = await readInput('City: ');
                const places = await searches.city( search_term );
                const id = await listPlaces( places );
                const { idx, name, lat, lng} = places.find( i => i.id === id);
                

                console.log('\nCity Information\n'.green);
                console.log('City', name );
                console.log('Lat', lat );
                console.log('Long', lng );
                console.log('Temperature');
                console.log('Minimum');
                console.log('Maximum');
            break;

            case 2:
                console.log('Seleccionaste la opcion 2');
            break;

            case 0:
                console.log('Seleccionaste la opcion 3');
            break; 

            


        }

        if ( opt !== 0) await pause();

    } while( opt !== 0);
}

main();