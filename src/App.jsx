import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Score } from './components/Score';
import { Dialog } from './components/Dialog';
import { createList } from './scripts/api';
import { mapNames } from './scripts/mapper';
import { randomizeList } from './scripts/randomize';

function App() {
    const [fetchStatus, setFetchStatus] = useState(false);
    const [gameStatus, setGameStatus] = useState(null);
    const [cards, setCards] = useState(null);
    const [cardsPerLevel, setCardsPerLevel] = useState(3);
    const [images, setImages] = useState(null);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    function handleGameFlow(key) {
        // TODO: Refactor API to fetch only 3 cards per level and mulitply once a level is cleared.
        return () => {
            switch (cards[key]) {
                case 'UNSELECTED': {
                    // Needed to create an explicit copy so that cardsSelected is up-to-date with the state of the game.
                    const copy = { ...cards, [key]: 'SELECTED' };
                    const cardsSelected = Object.values(copy).filter((item) => item === 'SELECTED');

                    setCurrentScore(currentScore + 1);

                    cardsSelected.length === cardsPerLevel
                        ? setGameStatus('CLEAR')
                        : setCards(copy);

                    break;
                }

                case 'SELECTED':
                    setGameStatus('LOSE');
            }
        };
    }

    function resetGame(gameStatus) {
        return () => {
            currentScore > bestScore ? setBestScore(currentScore) : null;
            gameStatus === 'LOSE' ? setCurrentScore(0) : setCardsPerLevel(cardsPerLevel + 3);
            setCards(null);
            setFetchStatus(false);
        };
    }

    useEffect(() => {
        async function fetchData() {
            const list = await createList(cardsPerLevel);

            setCards(mapNames(list.names));
            setImages(list.images);
            setFetchStatus(true);
            setGameStatus('INGAME');
        }

        if (!fetchStatus) fetchData();
    }, [fetchStatus, cardsPerLevel]);

    if (fetchStatus) {
        switch (gameStatus) {
            case 'INGAME': {
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
            }

            case 'LOSE':
                return (
                    <Dialog
                        currentScore={currentScore}
                        bestScore={bestScore}
                        handler={resetGame(gameStatus)}
                        gameStatus={gameStatus}
                    />
                );

            case 'CLEAR':
                return (
                    <Dialog
                        currentScore={currentScore}
                        bestScore={bestScore}
                        handler={resetGame(gameStatus)}
                        gameStatus={gameStatus}
                    />
                );
        }
    } else {
        return <p>Fetching</p>;
    }
}

export default App;
