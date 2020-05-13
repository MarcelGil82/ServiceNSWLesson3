// 1.
// let me = {
//     name: "Marcel",
//     age: 50
// };
// console.log(me)
// 2.
// let me = {
//     name: "Marcel",
//     age: 50
// };

// console.log(me.age)
//     me.age++;
// console.log(me.age)

// // 3.
// let me = {
//     name: "Marcel",
//     age: 50,
//     hobbies: ["football", "sleeping", "T.V"],
// };
// console.log(me)
// another way to do this is to do:
// me.hobbies = [
    // "football",
    // "sleeping",
    // "T.V"
// ];

// 4.
// let me = {
//     name: "Marcel",
//     age: 50,
    // hobbies: ["football", "sleeping", "T.V"],
//     pets : [
//         {
//         name: "Tiger",
//         age: 4,
//         spieces: "bird",
//     }, {
//         name: "Bambi",
//         age: 2,
//         spieces: "dog",
//     }, {
//         name: "Angel",
//         age: 1,
//         spieces: "cat",
//     }
//     ]
// };
// console.log(me)

// 5.
let me = {
    name: "Marcel",
    age: 50,
    hobbies: ["football", "sleeping", "T.V"],
    pets : [
        {
        name: "Tiger",
        age: 4,
        spieces: "bird",
    }, {
        name: "Bambi",
        age: 2,
        spieces: "dog",
    }, {
        name: "Angel",
        age: 1,
        spieces: "cat",
    }
    ]
}
let hobbies = "My hobbies are ";
for (let i = 0; i > hobbies.length; i++) {
    let hobby = me.hobbies[i];
    hobbies += me.hobby;
    hobbies += ", ";
} else if (i == me.hobbies.length - 2) {
    hobbies += ", ";
} else {
    hobbies += ", ";
}

console.log(hobbies);