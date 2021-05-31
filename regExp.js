let str = "My name is John";
console.log(str.search(/john/i));          // case-insensitive search with a Regular Expression
let str1 = str.replace(/john/i, "Marry");  // Regular expression to replace
console.log(str1);

let y = /e/.exec("My name is Alex");
console.log(y);
