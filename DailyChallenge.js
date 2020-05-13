let people = [
    {
    name: "John",
    age: 40
}, {
    name: "Nick",
    age: 52
}, {
    name: "Michael",
    age: 70
}];

function searchByCharacter(array, searchTerm) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

    let found = false;
for(let i = 0; i < element.name.length; i++) {
let letter = element.name[i];
if(letter == searchTerm) {
found = true;    
}
}
if (found) {
    resultArray.push(element);
}
}
return resultArray;
}
console.log(searchByCharacter)
console.log(searchByCharacter(people, "a"))