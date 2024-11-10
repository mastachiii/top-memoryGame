import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Score } from './components/Score';
import { generateMappedList } from './scripts/generate';
import { randomizeList } from './scripts/randomize';

function App() {
    const [foo, setFoo] = useState(false);
    const [cardsStatus, setCardsStatus] = useState(null);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    // const list = randomizeList(cardsStatus);

    function handleGameFlow(key) {
        return () => {
            const status = !cardsStatus[key];

            // If new status is true, it means that it's the first time it has been selected.
            if (status) {
                setCardsStatus({ ...cardsStatus, [key]: !cardsStatus[key] });
                setCurrentScore(currentScore + 1);
            } else {
                alert('Game Over!');
                setCardsStatus(null);
                setCurrentScore(0);
                currentScore > bestScore ? setBestScore(currentScore) : null;
            }
        };
    }

    useEffect(() => {
        async function fetchData() {
            const list = await generateMappedList();

            console.log(list);
            setCardsStatus(list);
        }

        fetchData();
    }, []);

    // TODO: Integrate PokeList to game logic. 
    
    if (cardsStatus) {
        return (
            <p>SUCCESS</p>
            // <div>
            //     {list.map((item, index) => {
            //         return (
            //             <Card
            //                 value={item}
            //                 status={cardsStatus[item]}
            //                 handler={handleGameFlow(item)}
            //                 key={index}
            //             />
            //         );
            //     })}
            //     <Score value={currentScore} text='Current Score: ' />
            //     <Score value={bestScore} text='Best Score: ' />
            // </div>
        );
    } else {
        return <p>test</p>;
    }
}

export default App;
