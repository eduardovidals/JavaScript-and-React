function largestOfFour(arr) {
    let largestArr = [];

    for (var i = 0; i < arr.length; i++){
        let largest = arr[i][0];
        for (var j = 0; j < 4; j++){
            if (arr[i][j] > largest){
                largest = arr[i][j];
            }
        }
        largestArr.push(largest);
    }
    return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);