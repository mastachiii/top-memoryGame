import { createList } from './api.js';
import { mapArray } from './mapper.js';
// Generate a list + convert and map necessary values to the list names.

async function generateMappedList() {
    const list = await createList();

    return mapArray(list.names);
}


export { generateMappedList };
