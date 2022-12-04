
const player = {};
player.name = 'atik'
player.profession = 'driving';
player.process = rise => (rise + 10);
const rises = player.process(10);
console.log(rises)

player.process(10)
// console.log(player);

//1. create object by useing object litaral -------------------------important------------------------

const student = {
    name: 'khaleed',
    profession: 'warrior',
    wars: function () {
        console.log('fight for muslim')
    },
    title: 'sword of khuda'
}

// 2. object constractor

const person = new Object();
// console.log(person);

// 3. object create method
// const items = Object.create(null);
const atel = Object.create(student);
// console.log(atel.profession);

// 4. class ---------------------------important--------------------------

class Person {
    name = 'injamam';
    address = 'pakistan';
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(36);
// console.log(person1);


// 5. function

function name(model, price) {
    this.model = model
    this.price = price
}
const tesla = ('varon', 35000);
// console.log(tesla)

let ul = `<li>Programming<li>`;
ul += `<li>Hero<li>`;
console.log(ul);