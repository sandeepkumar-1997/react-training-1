// replace alais with name

const a = [
  {name: 'first_name', alias: 'First Name', type: 'string'},
  {name: 'age', alais: 'Age', type: 'number'}
];
const b = [
  {first_name: 'John', age: 23},
  {first_name: 'Tom', age: 25}
];
/*
output will be:
const c = [
  {First Name: 'John', Age: 23},
  {First Name: 'Tom', Age: 25}
]
*/

const newArr = [];
for(i=0;i<b.length;i++){
   newArr.push({First_Name: b[i]['first_name'], Age: b[i]['age']});
}
console.log(newArr);
