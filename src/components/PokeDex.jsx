import { Button } from './Button';

function PokeDex({ handler }) {
    const list = JSON.parse(localStorage.getItem('pokeDex'));
    const listKeys = Object.keys(list);

    return (
        <div className='pokeDex'>
            <span>
                <h1>Pokédex</h1>
                <p>({listKeys.length} / 1025)</p>
            </span>
            <p>Click on their names for more details!</p>
            <Button text='PLAY AGAIN ?' handler={handler} />
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
