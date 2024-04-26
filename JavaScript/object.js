// Creating an object 
let person = {
    name: "John",
    age: 30,
    isMarried: false,
    address: {
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "traveling", "cooking"],
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing object properties
console.log("Name:", person.name); 
console.log("Age:", person["age"]); 

// Accessing nested properties
console.log("City:", person.address.city); 
console.log("First hobby:", person.hobbies[0]); 

// Calling object method
person.sayHello(); 

// Adding a new property
person.gender = "Male";
console.log("Gender:", person.gender);

// Deleting a property
delete person.isMarried;
console.log("Is Married:", person.isMarried); 
