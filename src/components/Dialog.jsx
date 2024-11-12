import { Button } from './Button';

function Dialog({ currentScore, bestScore, gameStatus, handler, handler2 }) {
    if (gameStatus === 'LOSE') {
        return (
            <dialog open={true}>
                <p>Game Over</p>
                <p>
                    The score you got is {currentScore},{' '}
                    {currentScore > bestScore
                        ? 'which is now your best score!'
                        : `${bestScore} is your best score.`}
                </p>
                <Button text='Restart' handler={handler} />
                <Button text='Open Pokédex' handler={handler2} />
            </dialog>
        );
    } else {
        // Defined outside of the JSX to avoid the return value of the setTimeout being included in the markup.
        // (https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout#return_value)
        setTimeout(() => {
            handler();
        }, 2000);

        return (
            <dialog open={true}>
                <p>LEVEL CLEARED</p>
                <p>Your current score is {currentScore}, keep going!</p>
            </dialog>
        );
    }
}

export { Dialog };
