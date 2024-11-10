import { useState } from 'react';
import { Card } from './components/Card';
import { randomizeList } from './scripts/randomize';
import { Score } from './components/Score';

const dummyList = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
};

function App() {
    const [cardsStatus, setCardsStatus] = useState(dummyList);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const list = randomizeList(cardsStatus);

    function handleGameFlow(key) {
        return () => {
            const status = !cardsStatus[key];

            // If new status is true, it means that it's the first time it has been selected.
            if (status) {
                setCardsStatus({ ...cardsStatus, [key]: !cardsStatus[key] });
                setCurrentScore(currentScore + 1);
            } else {
                alert('Game Over!');
                setCardsStatus(dummyList);
                setCurrentScore(0);
                currentScore > bestScore ? setBestScore(currentScore) : null;
            }
        };
    }

    return (
        <div>
            {list.map((item, index) => {
                return (
                    <Card
                        value={item}
                        status={cardsStatus[item]}
                        handler={handleGameFlow(item)}
                        key={index}
                    />
                );
            })}
            <Score value={currentScore} text='Current Score: ' />
            <Score value={bestScore} text='Best Score: ' />
        </div>
    );
}

export default App;
