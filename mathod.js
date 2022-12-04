// i can call function of objects outside of the objects
// i can declare an object into an object
// i can declare an array also a function in a object
//  always remember (this) this is soo much important

const student = {
    name: 'kodom ali',
    money: 5000,
    study: 'math',
    subject: ['calculas', 'geometry', 'algebra'],
    exam: function () {
        return this.name + 'is participiting exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function (amount) {
        this.money = this.money - amount;
        return this.money;
    }
}
student.exam();

const examsubject = student.improveExam('biology')
// console.log(examsubject)
const remaning = student.treatDay(900);
console.log(remaning)
const dolaremaning = student.treatDay(500);
console.log(dolaremaning)