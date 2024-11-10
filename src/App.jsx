import { useState } from 'react';
import { Card } from './components/Card';
import { randomizeList } from './scripts/randomize';
import { Score } from './components/Score';

function App() {
    const [cardStatus, setCardStatus] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const list = randomizeList(cardStatus);

    function handleGameFlow(key) {
        return () => {
            const newStatus = !cardStatus[key];

            // If new status is true, it means that it's the first time it has been selected.
            if (newStatus) {
                setCardStatus({ ...cardStatus, [key]: !cardStatus[key] });
                setCurrentScore(currentScore + 1);
            } else {
                alert('Game Over!');

                //TODO: Reset Game

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
                        status={cardStatus[item]}
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
