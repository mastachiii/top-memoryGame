// Fetches necessary data from PokeApi and compiles it into a list for components to use

async function createList(url) {
    const ids = new Set(); // Store used ids to avoid duplication
    const list = [];

    while (list.length !== 10) {
        const randomNumber = Math.floor(Math.random() * 1000);

        if (!ids.has(randomNumber)) {
            await fetch(`${url}${randomNumber}`)
                .then((response) => response.json())
                .then((response) => list.push(response.name));

            ids.add(randomNumber);
        }
    }

    console.log(list);
    return list;
}

console.log(createList('https://pokeapi.co/api/v2/pokemon/'));
