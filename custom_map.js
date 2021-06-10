var arr1 = [1, 2, 3, 4];
function customMap(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push((callback(array[i])));
    }
    console.log('After Operation: ' + newArray);
}

// customMap();
customMap(arr1, function (index) {
    return index * 3;
});
