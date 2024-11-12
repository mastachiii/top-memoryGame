function PokeDex() {
    const list = JSON.parse(localStorage.getItem('pokeDex'));
    const listKeys = Object.keys(list);

    return (
        <div className='pokeDex'>
            <h1>Pokédex</h1>
            <p>({listKeys.length} / 1025)</p>
            <ul>
                {listKeys.map((item) => {
                    return (
                        <li key={item}>
                            <p>{item}</p>
                            <img src={list[item]} alt={item} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export { PokeDex };
