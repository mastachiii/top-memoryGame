function Button({ text, handler }) {
    return <button onClick={handler}>{text}</button>;
}

export { Button };
