// function


function First() {
    console.log("Hello");
  }
  
  function Second() {
    console.log("Goodbye");
  }
  
  First();
  Second();

  // add two numbers using function
  function add(a,b){
    return a+b
  }
var addition=add(45,89);
console.log(addition)


// anonymous function
var sub=function (a,b){
 return a-b
}
var subtraction=sub(56,9)
console.log(subtraction)

//arrow function
var mul=(a,b)=> a*b;
var multiply=mul(45,89)
console.log(multiply)

// multiple arrow function

var operations=[(a,b)=>a+b,
(a,b)=>a-b];
var Result=operations[0](56,90)
var Result1=operations[1](56,90)
console.log(Result)
console.log(Result1)

//callback function

// function first(third){
//  console.log("hello")
//  third();
// }
// function second(){
//    console.log("welcome to learn callback function")
// }
// first(second)

//callback function settimeout

function first(third){
  console.log("hello")
 setTimeout(function(){
   console.log("hiiii")
   third()
 },2000)
 }
 function second(){
    console.log("welcome to learn callback function")
 }
 first(second)
//setinterval
//  function first(third){
//   console.log("hello")
//  setInterval(function(){
//    console.log("hiiii")
//    third()
//  },2000)
//  }
//  function second(){
//     console.log("welcome to learn callback function")
//  }
//  first(second)


// find()

const numbers = [10, 20, 30, 40, 50];
function isGreaterThan30(number) {
  return number > 30;
}
const result2 = numbers.find(isGreaterThan30);
console.log(result2); 

//filter()
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers1.filter(number => number % 2 === 0);
console.log(evenNumbers);

// create class

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}
let myCar = new Car('Toyota', 'Corolla', 2022);//Instance
myCar.displayInfo();

//hoisting -->possile only for var
x=5;
console.log(x);
var x;

//spread operator--->copy all element from existing array int new array

const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];
const Combined = [...arrOne , ...arrTwo];
console.log(Combined)
