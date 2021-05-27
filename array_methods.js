let person = ["Ram", "Shyam", "Samar", "Boby"];
console.log(person.toString());                         // toString converts an array to a string of array values
console.log(person.join(" @ "));                        // join method joins all array elements into a string with separator
let pop = person.pop();  
console.log(person);                               // removes the last element from an array
console.log(pop);                                  // return popped item
let shift = person.shift();                        // removes the first array element and "shifts" all other elements to a lower index
console.log(shift);                                // return shifted item
console.log(person.unshift("Hari"));               // method adds a new element to an array (at the beginning)
console.log(person);
let place = ["Delhi", "Mumbai", "Chennai", "Punjab"];
let all = person.concat(place);                     // join two or more arrays
console.log(all);
let slice = all.slice(1,4);                         // slice() method slices out a piece of an array into a new array
console.log(slice);