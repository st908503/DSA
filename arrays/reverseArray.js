//3. Reverse an Array

// input 
// console.log(reverseArray([1, 2, 3, 4, 5]));
//output
// [5, 4, 3, 2, 1]


function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

// Complexity:

// Time: O(n)
// Space: O(1)

//arr.reverse() in js built in for this but interviewer may ask to implement it without using built in function.

// Why use two pointers?
// Without two pointers, you might create another array:

// let result = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
// }

// That uses O(n) extra space.

// Two pointers allow you to reverse the same array in-place: