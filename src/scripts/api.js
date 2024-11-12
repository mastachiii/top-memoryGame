// Fetches necessary data from PokeApi and compiles it into a list for components to useE
async function createList(amountOfCards) {
    const ids = new Set(); // Store used ids to avoid duplication
    const list = {
        names: [],
        images: {},
    };

    // Only allow up to 18 cards per game.
    amountOfCards = amountOfCards < 18 ? amountOfCards : 18

    while (list.names.length !== amountOfCards) {
        const randomNumber = Math.floor(Math.random() * 1000);

        if (!ids.has(randomNumber)) {
            await fetch('https://pokeapi.co/api/v2/pokemon/' + randomNumber)
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

    return list;
}

createList();

export { createList };
