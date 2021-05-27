let str = "My name is Sandeep Kumar";
console.log(str.length);
console.log(str.indexOf("is"));               // returns the index of first occurrence of a text in a string
console.log(str.slice(3,7));                  // extracts a part of a string
console.log(str.slice(3));
console.log(str.replace("Sandeep", "Aman"));  // method replaces a specified value with another value in a string
let str2 = str.toUpperCase();                 // change all char to upper case
console.log(str2);
let str3 = str2.toLowerCase();                // change all char to lower case
console.log(str3);
let str4 = str2.concat(" ", str3);            // joins two or more strings
console.log(str4);
console.log(str4.charAt(1));                  // returns the character at a specified index