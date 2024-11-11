function Card({ value, status, handler }) {
    return <div onClick={handler}>{status ? 'Selected' : <img src={value} />}</div>;
}

export { Card };
