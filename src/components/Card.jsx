import { userRef, useState } from 'react';

function Card({ value }) {
    const [hasBeenSelected, setHasBeenSelected] = useState(false);

    function handleClick() {
        setHasBeenSelected(true);
    }
    
    return <div onClick={handleClick}>{!hasBeenSelected ? value : 'Selected'}</div>;
}

export { Card };
