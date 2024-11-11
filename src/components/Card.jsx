function Card({ value, status, handler }) {
    return <div onClick={handler}>{status === 'SELECTED' ? 'Selected' : <img src={value} />}</div>;
}

export { Card };
