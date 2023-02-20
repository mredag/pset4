const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

console.log(name == lastname) //false cannot comp. string like that
console.log(age <= average) //true
console.log(firstYearCompleted == lastname) //boolean vs string = false
console.log(yearsCompleted == firstYearCompleted) //true
console.log(firstYearCompleted === yearsCompleted) //false
console.log(examsCompleted < age) //true
console.log(isGraduated > yearsCompleted) //false