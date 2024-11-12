function Audio({url}) {
    return (
        <audio autoPlay loop>
            <source src={url} type='audio/mpeg' />
        </audio>
    );
}

export { Audio };
