// Creating a Map
let myMap = new Map<number, string>();

// Adding elements to the Map
myMap.set(1, 'One');
myMap.set(2, 'Two');
myMap.set(3, 'Three');

// Accessing elements in the Map
console.log(myMap.get(1)); 

// Iterating over the Map
myMap.forEach((value, key) => {
  console.log(key, value);
});

// Checking if a key exists in the Map
console.log(myMap.has(1));

// Deleting elements from the Map
myMap.delete(2);

// Clearing all elements from the Map
myMap.clear();



// Creating a Set
let mySet = new Set<number>();

// Adding elements to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);

// Checking if a value exists in the Set
console.log(mySet.has(1)); 

// Iterating over the Set
mySet.forEach((value) => {
  console.log(value);
});

// Deleting elements from the Set
mySet.delete(2);

// Clearing all elements from the Set
mySet.clear();



// Defining an enum
enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  // Using an enum
  let playerDirection: Direction = Direction.Up;
  console.log(playerDirection); 
  
  // Accessing enum values by name or index
  console.log(Direction.Up); 
  console.log(Direction[0]); 
  
  // Enums with custom values
  enum Color {
    Red = '#FF0000',
    Green = '#00FF00',
    Blue = '#0000FF'
  }
  
  console.log(Color.Red); 
  
  // Enums with computed values
  enum LogLevel {
    Error = 1,
    Warn,
    Info,
    Debug
  }
  
  console.log(LogLevel.Warn); 
  
  // Enums with mixed member types
  enum Status {
    Active = 'ACTIVE',
    Inactive = 0
  }
  
  console.log(Status.Active); 
  console.log(Status.Inactive); 
  

  // Declaring a tuple type
let myTuple: [number, string, boolean];

// Initializing a tuple
myTuple = [10, 'Hello', true];

// Accessing tuple elements
console.log(myTuple[0]); 
console.log(myTuple[1]); 
console.log(myTuple[2]); 

// Updating tuple elements
myTuple[0] = 20;
myTuple[1] = 'World';
myTuple[2] = false;

// Destructuring tuple elements
let [numberValue, stringValue, booleanValue] = myTuple;
console.log(numberValue);
console.log(stringValue); 
console.log(booleanValue); 
