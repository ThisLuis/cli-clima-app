import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';

const main = async() => {
   
    let opt;
    
    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case 1:
                console.log('Seleccionaste la opcion 1');
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