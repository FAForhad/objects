// for of cannot b used in object 

const bottle = { color: 'yellow', price: 50, isClean: true, capacity: 1 };

// always remember this way of loop(most important)

for (const key in bottle) {
    const value = bottle[key];
    // console.log(key, value)
}


// not nessecery but important
for (const [key, value] of Object.entries(bottle)) {
    // console.log(key, value);
}

const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFriend = (name = "chokina") => "name";
console.log(getGirlFriend()); 