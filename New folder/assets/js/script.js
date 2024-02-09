"use strict"

// TASK1


function getWord(text) {
    let word = text.split("");
    for (let i = 0; i < word.length; i++) {
        return word.reverse().join("");
    }
}
// console.log(getWord("Cavid"));


// TASK2
function getAgeByYear(age) {
  let res = new Date().getFullYear();
  return res-age;
}
// console.log(getAgeByYear(30));


// TASK3

let person1 = {
    id: 1,
    name: "Jhon",
    fullName: "Jhon Smith",
    age: 23,
    salary: 1400

};
let person2 = {
    id: 2,
    name: "Barack",
    fullName: "Barack Obama",
    age: 33,
    salary: 2600

};
let person3 = {
    id: 3,
    name: "Maria",
    fullName: "Maria Lopez",
    age: 18,
    salary: 1700

};
let person4 = {
    id: 4,
    name: "Li",
    fullName: "Li Wei",
    age: 33,
    salary: 3400

};

let people = [person1, person2, person3, person4];

// TASK3/1

// function getCountOfPeople(people) {
//     let count = 0;
//     for (let i = 0; i < people.length; i++) {
//         count++;

//     }
//     return count;
// }
// console.log(getCountOfPeople(people));

// const getCountOfPeople = (people)=>{
//     let count = 0;
//     for (let i = 0; i < people.length; i++) {
//         count++;

//     }
//     return count;
// }
// console.log(getCountOfPeople(people));


// TASK3/2


function getAvarageOfSalary(people) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < people.length; i++) {
        count++;
        sum += people[i].salary;
    }
    let res = sum / count;
    return res;
}
// console.log(getAvarageOfSalary(people));



// TASK3/3

function searchByFullName(people, searchText) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].fullName.includes(searchText.trim())) {
            let result = people[i].name + " " + people[i].age + " " + people[i].salary + " " + people[i].id;
            return result;
        }
    }
}
console.log(searchByFullName(people,"    Li Wei"));





