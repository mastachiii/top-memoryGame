import { useState } from 'react';
import { Card } from './components/Card';
import { randomizeList } from './scripts/randomize';

function App() {
    const [cardStatus, setCardStatus] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });

    console.log(randomizeList(cardStatus))

    function handleCardStatus(key) {
        return () => setCardStatus({ ...cardStatus, [key]: !cardStatus[key] });
    }

    // return (
    //     // <div>
    //     //     <Card value={arr[0]} status={cardStatus[arr[0]]} handler={handleCardStatus(arr[0])} />
    //     //     <Card value={arr[1]} status={cardStatus[arr[1]]} handler={handleCardStatus(arr[1])} />
    //     //     <Card value={arr[2]} status={cardStatus[arr[2]]} handler={handleCardStatus(arr[2])} />
    //     // </div>
    // );
}

export default App;
