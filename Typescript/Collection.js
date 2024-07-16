// Creating a Map
var myMap = new Map();
// Adding elements to the Map
myMap.set(1, 'One');
myMap.set(2, 'Two');
myMap.set(3, 'Three');
// Accessing elements in the Map
console.log(myMap.get(1));
// Iterating over the Map
myMap.forEach(function (value, key) {
    console.log(key, value);
});
// Checking if a key exists in the Map
console.log(myMap.has(1));
// Deleting elements from the Map
myMap.delete(2);
// Clearing all elements from the Map
myMap.clear();
// Creating a Set
var mySet = new Set();
// Adding elements to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
// Checking if a value exists in the Set
console.log(mySet.has(1));
// Iterating over the Set
mySet.forEach(function (value) {
    console.log(value);
});
// Deleting elements from the Set
mySet.delete(2);
// Clearing all elements from the Set
mySet.clear();
// Defining an enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// Using an enum
var playerDirection = Direction.Up;
console.log(playerDirection);
// Accessing enum values by name or index
console.log(Direction.Up);
console.log(Direction[0]);
// Enums with custom values
var Color;
(function (Color) {
    Color["Red"] = "#FF0000";
    Color["Green"] = "#00FF00";
    Color["Blue"] = "#0000FF";
})(Color || (Color = {}));
console.log(Color.Red);
// Enums with computed values
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warn"] = 2] = "Warn";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
console.log(LogLevel.Warn);
// Enums with mixed member types
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Inactive"] = 0] = "Inactive";
})(Status || (Status = {}));
console.log(Status.Active);
console.log(Status.Inactive);
// Declaring a tuple type
var myTuple;
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
var numberValue = myTuple[0], stringValue = myTuple[1], booleanValue = myTuple[2];
console.log(numberValue);
console.log(stringValue);
console.log(booleanValue);
