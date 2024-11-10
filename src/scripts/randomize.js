// Expects an object and spits out an array with it's keys in a random index.

import { generateMappedList } from './generate.js';

function randomizeList(list) {
    const keys = Object.keys(list);
    const randomized = [];

    while (keys.length !== 0) {
        const index = Math.floor(Math.random() * keys.length);

        randomized.push(keys.splice(index, 1)[0]);
    }

    return randomized;
}

async function foo() {
    const list = await generateMappedList();
    console.log(list);
    console.log(randomizeList(list));
}

foo();

export { randomizeList };
