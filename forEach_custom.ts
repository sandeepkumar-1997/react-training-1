const arr = [1,2,3,4];
function customForEach(array, callback) {
    for (let i = 0; i < arr.length; i++) { 
        callback(arr[i]);
    }
}

function callback(element) {
    let element1 = element * 3;
    console.log(element1); 
}
customForEach(arr, callback); 