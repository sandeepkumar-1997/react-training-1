// Task 3: get all Children by parentId create a dropdown of all ids, user can select id and will get all children
 
const a = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 2 },
    { id: 6, parentId: 2 },
    { id: 7, parentId: 5 },
    { id: 8, parentId: 5 },
    { id: 9, parentId: 5 },
    { id: 10, parentId: 5 },
  ];
   
  // function to get all parent id's
  function getParents(data) {
    const output = [...new Set(data.map((x) => x.parentId))];
    return output.slice(1);
  }
  // get first children of parent id
function getChildren(parentId, data) {
    const output = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].parentId === parentId) {
        output.push(data[i].id);
      }
    }
    return output;
  }
   
  // get All children of parentId
  function getAllChildren(parentId, data) {
    const parents = getParents(data);
   
    let output = getChildren(parentId, data);
   
    for (let i = 0; i < output.length; i++) {
      if (parents.includes(output[i])) {
        const newOutput = getChildren(output[i], data);
        output = output.concat(newOutput);
      }
    }
    return output;
  }
   
  console.log(getAllChildren(5,a));