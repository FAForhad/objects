const bottle = { color: 'yellow', price: 50, isClean: true, capacity: 1 };
const keys = Object.keys(bottle);
const value = Object.values(bottle);


Object.seal(bottle)
Object.freeze(bottle)
delete bottle.isClean

console.log(bottle)