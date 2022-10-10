// Refresh on arrow function
const add = (num1: number, num2: number) => console.log(num1 + num2);

add(5, 10);

// Default function parameter

const addition = (num1: number, num2: number = 20) => console.log(num1 + num2);
addition(40);

// Refresh on spread operator
// Array
const hobbies = ["formula 1", "tenis"];
const extraHobby = ["football", ...hobbies];

console.log(extraHobby);

// Object

const info = {
  name: "Jean",
  address: "Mahebourg",
};

const infoCopy = { ...info };

console.log(infoCopy);

// Rest operator
const value = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const valueAdd = value(1, 5, 10);
console.log(valueAdd);

// Destructure
// Array
const work = ["Policeman", "Developer", "chef"];

const [work1, , work3] = work;
console.log(work1, work3);

// Object
const userInfo = {
  name: "Jhon",
  surname: "Doe",
  age: "21",
};

const { surname, age } = userInfo;
console.log(age);
