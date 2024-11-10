// Expects an object and spits out an array with it's keys in a random index.
import { createList } from './api.js';

function randomizeList(list) {
    const keys = Object.keys(list);
    const randomized = [];

    while (keys.length !== 0) {
        console.log(keys);
        const index = Math.floor(Math.random() * keys.length);

        randomized.push(keys.splice(index, 1));
    }

    return randomized;
}

// TODO: Finish Array to Object mapper

export { randomizeList };
