function Card({ value, status, handler }) {
    return <div onClick={handler}>{status ? 'Selected' : value}</div>;
}

export { Card };
