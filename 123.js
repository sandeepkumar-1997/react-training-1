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
   
   function getParents(data) {
    [... new Set(a)].slice(1)
 
  // function to get all parent id's
//   function getParents(data) {
//     const output = [...new Set(data.map((x) => x.parentId))];
//     return output.slice(1);
//   }
   }
  console.log(getParents(a));