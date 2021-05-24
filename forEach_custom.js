var arr = [1, 2, 3, 4];
function customForEach(array, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
function callback(element) {
    var element1 = element * 3;
    console.log(element1);
}
customForEach(arr, callback);
