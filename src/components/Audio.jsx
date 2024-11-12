function Audio({ url, loop, autoPlay, id }) {
    return (
        <audio autoPlay={autoPlay} loop={loop} id={id}>
            <source src={url} type='audio/mpeg' />
        </audio>
    );
}

export { Audio };
