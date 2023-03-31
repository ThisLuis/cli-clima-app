import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import Search from './models/searches.js';

const main = async() => {
   
    const searches = new Search();
    let opt;
    
    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case 1:
                const place = await readInput('City: ');
                await searches.city( place );

                console.log('\nCity Information\n'.green);
                console.log('City');
                console.log('Lat');
                console.log('Long');
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