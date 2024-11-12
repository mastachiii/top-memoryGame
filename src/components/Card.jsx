function Card({ text, imageUrl, status, handler }) {
    return (
        <div onClick={handler}>
            <img src={imageUrl} />
            <p>{text}</p>
        </div>
    );
}

export { Card };
