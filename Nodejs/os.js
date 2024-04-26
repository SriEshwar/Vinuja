//Returns the CPU architecture
const os = require('os');
console.log(os.arch()); 

// Returns an array of objects
//  containing information about each CPU/core on the system.
console.log(os.cpus());

// Returns the total amount of system memory in bytes
console.log(os.totalmem()); 

// Returns the amount of free system memory in bytes.
console.log(os.freemem()); 

// Returns the hostname of the operating system.
console.log(os.hostname());

// Returns the operating system platform
console.log(os.platform());

// Returns the operating system name
console.log(os.type());