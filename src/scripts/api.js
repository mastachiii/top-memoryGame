// Fetches necessary data from PokeApi and compiles it into a list for components to useE
async function createList(url = 'https://pokeapi.co/api/v2/pokemon/') {
    const ids = new Set(); // Store used ids to avoid duplication
    const list = {
        names: [],
        images: {},
    };

    while (list.names.length !== 10) {
        const randomNumber = Math.floor(Math.random() * 1000);

        if (!ids.has(randomNumber)) {
            await fetch(`${url}${randomNumber}`)
                .then((response) => response.json())
                .then((response) => {
                    const name = response.name;
                    const imageUrl = response.sprites.front_default;
                    list.names.push(name);
                    list.images[name] = imageUrl;
                });

            ids.add(randomNumber);
        }
    }

    console.log(list);
    return list;
}

createList();

export { createList };
