import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Score } from './components/Score';
import { createList } from './scripts/api';
import { mapNames } from './scripts/mapper';
import { randomizeList } from './scripts/randomize';

function App() {
    const [fetchStatus, setFetchStatus] = useState(false);
    const [cards, setCards] = useState(null);
    const [images, setImages] = useState(null);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    function handleGameFlow(key) {
        const resetGame = (text) => {
            currentScore > bestScore ? setBestScore(currentScore) : null;
            alert(text);
            setFetchStatus(false);
            setCards(null);
            setCurrentScore(0);
        };

        return () => {
            switch (cards[key]) {
                case 'UNSELECTED': {
                    // Needed to create an explicit copy so that cardsSelected is up-to-date with the state of the game.
                    const copy = { ...cards, [key]: 'SELECTED' };
                    const cardsSelected = Object.values(copy).filter((item) => item);

                    if (cardsSelected.length === 10) return resetGame('You Win!');

                    setCards(copy);
                    setCurrentScore(currentScore + 1);
                    break;
                }

                case 'SELECTED':
                    resetGame('Game Over');
            }
        };
    }

    useEffect(() => {
        async function fetchData() {
            const list = await createList();

            setCards(mapNames(list.names));
            setImages(list.images);
            setFetchStatus(true);
        }

        if (!fetchStatus) fetchData();
    }, [fetchStatus]);

    if (fetchStatus) {
        const cardsRandomized = randomizeList(cards);

        return (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {cardsRandomized.map((item) => {
                    return (
                        <Card
                            value={images[item]}
                            status={cards[item]}
                            handler={handleGameFlow(item)}
                            key={item}
                        />
                    );
                })}
                <Score value={currentScore} text='Current Score: ' />
                <Score value={bestScore} text='Best Score: ' />
            </div>
        );
    } else {
        return <p>Fetching</p>;
    }
}

export default App;
