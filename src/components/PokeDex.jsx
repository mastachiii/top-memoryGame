function PokeDex() {
    const list = JSON.parse(localStorage.getItem('pokeDex'));
    const listKeys = Object.keys(list);

    return (
        <div className='pokeDex'>
            <span>
                <h1>Pokédex</h1>
                <p>({listKeys.length} / 1025)</p>
            </span>
            <ul>
                {listKeys.map((item) => {
                    return (
                        <li key={item}>
                            <img src={list[item]} alt={item} />
                            <a target='blank' href={`https://pokemondb.net/pokedex/${item}`}>
                                {item}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export { PokeDex };
