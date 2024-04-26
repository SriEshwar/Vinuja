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

