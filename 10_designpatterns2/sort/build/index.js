"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Array_1 = require("./components/Array");
const LinkedList_1 = require("./components/LinkedList");
const MyString_1 = require("./components/MyString");
const arr = [1, 3, 2, 5, 4, 8, 7, 6];
let myArr = new Array_1.Array(arr);
let myLL = new LinkedList_1.LinkedList(arr);
const str = "13254876";
let myString = new MyString_1.MyString(str);
console.log("Unsorted:");
myArr.log();
myLL.log();
myString.log();
// for (let i = 0; i < arr.length; ++i) {
//   console.log(`Array: Should be ${arr[i]}: ${myArr.at(i)}`);
//   console.log(`LL: Should be ${arr[i]}: ${myLL.at(i)}`);
//   console.log(`String: Should be ${arr[i]}: ${myString.at(i)}`)
// }
// for (let i = 0; i < arr.length; ++i) {
//   myArr.set(i, arr[i]+10);
//   myLL.set(i, arr[i]+10);
//   myString.set(i, 10-arr[i]);
//   console.log(`Array: Should be ${arr[i]+10}: ${myArr.at(i)}`);
//   console.log(`LL: Should be ${arr[i]+10}: ${myLL.at(i)}`);
//   console.log(`String: Should be ${10-arr[i]}: ${myString.at(i)}`)
// }
myArr.sort();
myLL.sort();
myString.sort();
myArr.log();
myLL.log();
myString.log();
