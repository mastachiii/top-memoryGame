import { Button } from './Button';

function Dialog({ currentScore, bestScore, gameStatus, handler }) {
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
        </dialog>
    );
}

export { Dialog };
