function Background() {
    return (
        <video
            autoPlay
            muted
            loop
            style={{
                position: 'fixed',
                right: 0,
                bottom: 0,
                minWidth: 100,
                minHeight: 100,
                zIndex: -1,
            }}
        >
            <source src='/bg.mp4' />
        </video>
    );
}

export { Background };
