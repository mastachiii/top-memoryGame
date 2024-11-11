// Expects an array and converts it into an object where it's keys will be the elements and will have a default value of false.
// Will be used for the card component to indicate if the card is selected or not.
function mapNames(array) {
    const obj = {};

    for (const item of array) {
        obj[item] = false;
    }

    return obj;
}

export { mapNames };
