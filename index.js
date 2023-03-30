import { readInput } from './helpers/inquirer.js';

const main = async() => {
    const text = await readInput('Hola: ');
    console.log( text );
}

main();