// Array concepts
// pop()---> remove element at end
let listofelement = [2,3,4,6,7,8,90,23,56,78,23,89];
listofelement.pop();
console.log(listofelement);

//push ----> add element at end
listofelement.push(67);
console.log(listofelement);

//length
console.log(listofelement.length);

//shift ---> remove 1st lement from the array

listofelement.shift();
console.log(listofelement);

//unshift ---> add 1 or more element from the array

listofelement.unshift(234,45);
console.log(listofelement);

//concat ---> merge two array(return new array)
let elements=[234,567,789,899,890];
let result=listofelement.concat(elements);
console.log(result);

//at -->get particular element

console.log(listofelement.at(0));

//join -->join all element in an array to string

let output=listofelement.join(" ");
console.log(output);

//slice() ---> used to extract an element from an array (return new array)

let  answer =listofelement.slice(-3,-1)
console.log(answer);

//splice ---> add or remove element from specified index(chandes the original array)

let  answer1 =listofelement.splice(1,0,11)
console.log(listofelement);

//sort

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

let arr=[4,2,7,4,8,9];
let arr1=[11,100,111,78,90,23]
arr.sort();
console.log(arr);
// arr1.sort();
// console.log(arr1);

//ascending order
arr1.sort((a,b)=>a-b);
console.log(arr1)

// decending order
arr1.sort((a,b)=>b-a);
console.log(arr1)

//reverse


fruits.reverse();
console.log(fruits);

// Map()--->used for iteration(create new array)
console.log(listofelement)
let Map=listofelement.map(function(numbers){
  return numbers*2
})
console.log(Map)

//for each

let listofelement1 = [5, 7, 8, 9, 5];
listofelement1.forEach(function(number) {
  console.log(number * 3);
});


              //String Methods

 let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let length = text.length;
 console.log(length)

 //charAt
 console.log(text.charAt(4));

 //charCodeAt()
 console.log(text.charCodeAt(4));
 //at
 console.log(text.at(4));
 //toUpperCase()
 let txt="hello welcome to learn js"
 console.log(txt.toUpperCase())
 //toLowerCase
 console.log(text.toLowerCase());
 //slice 
 console.log(text.slice(3,10));


 //object
//  var employee={
//      emp_name:"Rathi",
//      emp_Id:201,
//      emp_role:"Developer",
//      emp_salary:30000
//  };
//  console.log("The Employee Name is : "+employee.emp_name);

function EmployeeDetails(name,id,role){
    this.name=name;
    this.id=id;
    this.role=role;
}

var Details=new EmployeeDetails("Rathi",201,"Developer")
console.log(Details.name)


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

//