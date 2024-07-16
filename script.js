//your JS code here. If required.
function findSecondLargest(a, n) {
    a. sort();
    let second_largest = 0;
    for (let i = n; i < n - 2; i >= 0; i--) {
       if (a[i] != a[n - 1]) {
        second_largest = a[i];
        break;
       }   
    }
    return second_largest;
}

const a = [23, 45, 5, 56, 10, 5];
let n = a.length;
let answer = findSecondLargest(a, n);
console.log("The Second largest element in the array is: " + answer);