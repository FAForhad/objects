const first = { a: 2, b: 5, c: 7 };
const second = { a: 2, b: 5, d: 7 };

function compareObject(first, second) {
    const firstKey = Object.keys(first);
    const secondKey = Object.keys(second);
    if (firstKey.length === secondKey.length) {
        for (const key of firstKey) {
            if (first[key] !== second[key])
                return false
        }
    }
    return true;
}
const isSame = compareObject(first, second);
console.log(isSame)