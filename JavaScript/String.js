let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

// charAt
console.log(text.charAt(4));

// charCodeAt()
console.log(text.charCodeAt(4)); 

// at (ES2021)
console.log(text.at(4)); 

// toUpperCase()
let txt = "hello welcome to learn js";
console.log(txt.toUpperCase()); 

// toLowerCase()
console.log(text.toLowerCase());

// slice
console.log(text.slice(3, 10)); 

// indexOf
console.log(text.indexOf("M")); 

// lastIndexOf
console.log(text.lastIndexOf("M")); 

// includes
console.log(text.includes("P")); 

// startsWith
console.log(text.startsWith("A")); 

// endsWith
console.log(text.endsWith("Z")); 

// replace
console.log(txt.replace("hello", "hi")); 

// concat
console.log(text.concat("123")); 

// trim
let spaceText = "   Hello, world!   ";
console.log(spaceText.trim()); 

// split
let sentence = "This is a sample sentence";
console.log(sentence.split(" ")); 
