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

    const list = randomizeList(cardStatus);

    function handleCardStatus(key) {
        return () => {
            setCardStatus({ ...cardStatus, [key]: !cardStatus[key] });
        };
    }

    function handleGameFlow(key) {
        return () => {
            const newStatus = !cardStatus[key];

            // If new status is true, it means that it's the first time it has been selected.
            if (newStatus) {
                setCardStatus({ ...cardStatus, [key]: !cardStatus[key] });
                setCurrentScore(currentScore + 1);
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
            <Score value={currentScore} />
        </div>
    );
}

export default App;
