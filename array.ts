let animal = ["Dog", "Cat", "Cow", "Goat", "Lion"];
console.log(animal[1]);                                         // access elements of an array using index number
console.log(animal);
console.log(animal.length);                                     // get length of the array
let lastElement = animal[animal.length - 1];
console.log(lastElement);                                       // access last element of an array
let newAnimal = animal.push("Elephant");                        // push method adds new items to the end of an array
console.log(newAnimal);                                         // and returns the new length
console.log(animal);
