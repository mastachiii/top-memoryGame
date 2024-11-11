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
        return () => {
            const status = !cards[key];

            // If new status is true, it means that it's the first time it has been selected.
            if (status) {
                setCards({ ...cards, [key]: 'Selected' });
                setCurrentScore(currentScore + 1);
            } else {
                alert('Game Over!');
                setFetchStatus(false);
                setCards(null);
                setCurrentScore(0);
                currentScore > bestScore ? setBestScore(currentScore) : null;
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
