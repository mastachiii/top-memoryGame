// Holds properties from the API fetch such as name, image and sfx.

const asset = {
    names: [],
    images: [],
};

function resetAsset() {
    const keys = Object.keys(asset);

    for (const key of keys) {
        asset[key] = [];
    }
}

export { asset, resetAsset };
