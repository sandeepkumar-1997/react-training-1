let personName = "Harry";       // Global scope of this variable
console.log(personName);        // Here we can use this variable

function myFunction() {
    let animalName = "Bird";        // Local scope 
  
    // code here CAN use carName
    console.log(personName);       // can also use here because of Global variable 
    console.log(animalName);       // Here we can access local Variable
  
  }
myFunction();
console.log(animalName);        // can't access here outside the function local scope variable