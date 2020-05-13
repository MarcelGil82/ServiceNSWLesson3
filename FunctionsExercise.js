// 1.
// function addNumbers(num1, num2) {
//         return num1 + num2;
//     }
//  let myAnswer = addNumbers (5, 10)
//     console.log(myAnswer);
// 2.
// function getLargerNumber(num1, num2) {
//     if (num1 > num2){
//     return num1;
//     }
//     return num2;
// }

// let myAnswer = getLargeNumber (5, 10);
// console.log(getLargerNumber(5,10)    FIX

// 3.
// function myArrayPrinter(myArray) {
//     for (let i = 0; i < myArray.length; i++) {
//         let myItem = myArray[i];
//         console.log(myItem);
//     }
// }
// let name = [
//     "Marcel",
//     "Damien",
//     "Gil"
// ];

// myArrayPrinter(name);

// 4.
// function createPerson(name, age) {
//     return {
//         name: name, // name, - shortcut instead of name: name,
//         age: age    // age - shortcut instead of age: age,
//     }
// }
// let Marcel = createPerson("Marcel", 50)

// console.log(Marcel);

// 5.
let people = [
    {
    name: "John",
    age: 40,
}, {
    name: "Nick",
    age: 52,
}, {
    name: "Michael",
    age: 70,
}]
function getOldest(array) 
let oldestCurrent;
for (let i = 0; i < people.length; i++) {
    if(oldestCurrent) {
        oldest = person; 
        if (person.age > oldestCurrent.age) {
            oldestCurrent = person; 
        }
    }
    return oldestCurrent.name;
};
console.log(getOldest(people))