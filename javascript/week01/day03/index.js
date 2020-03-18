// Write a JavaScript function that compares two arrays and prints whether they are equal or not.

// Note: Two arrays are considered equal if both arrays contain the same number of elements, 
// and all corresponding pairs of elements in the two arrays are equal. In other words, two arrays 
// are equal if they contain the same elements in the same order.
function compArr(arr1, arr2) {

    if (arr1.length == arr2.length) {

        for (i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return (false)
            }
        }
        return (true)
    }

    return (false);
}

let arr1 = [1, 2, 3];
let arr2 = [2, 5, 6]
let arr3 = [1, 2, 3]
let arr4 = [2, 5, 6]
console.log(compArr(arr1, arr2)) //output should be false
console.log(compArr(arr4, arr2)) //output should be true
console.log(compArr(arr1, arr3)) //output should be true