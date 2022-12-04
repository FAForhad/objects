const KodomAli = {
    name: 'kodom ali',
    money: 5000,
    study: 'math',
    subject: ['calculas', 'geometry', 'algebra'],
    exam: function () {
        return this.name + ' is participiting exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const badamAli = {
    name: 'badam Ali',
    money: 8000
}

// amra chailei onno object er vitore thaka function ke onno arekti onject e call korte pari---
const exm = KodomAli.exam.call(badamAli);
console.log(exm)
// -------------call er jonno comma use korte hobe----------
const treatDay = KodomAli.treatDay.call(badamAli, 500, 50);
// console.log(treatDay)

// -----------apply er ejonno arry-----------------
const treatDay2 = KodomAli.treatDay.apply(badamAli, [500, 50]);
// console.log(treatDay2)


// ------------bidn arekta function toiri kore--------------
const treatDay3 = KodomAli.treatDay.bind(badamAli);
const remaining = treatDay3(500, 52);
// console.log(remaining)