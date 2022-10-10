var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Refresh on arrow function
var add = function (num1, num2) { return console.log(num1 + num2); };
add(5, 10);
// Default function parameter
var addition = function (num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    return console.log(num1 + num2);
};
addition(40);
// Refresh on spread operator
// Array
var hobbies = ["formula 1", "tenis"];
var extraHobby = __spreadArray(["football"], hobbies, true);
console.log(extraHobby);
// Object
var info = {
    name: "Jean",
    address: "Mahebourg"
};
var infoCopy = __assign({}, info);
console.log(infoCopy);
// Rest operator
var value = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var valueAdd = value(1, 5, 10);
console.log(valueAdd);
// Destructure
// Array
var work = ["Policeman", "Developer", "chef"];
var work1 = work[0], work3 = work[2];
console.log(work1, work3);
// Object
var userInfo = {
    name: "Jhon",
    surname: "Doe",
    age: "21"
};
var surname = userInfo.surname, age = userInfo.age;
console.log(age);
