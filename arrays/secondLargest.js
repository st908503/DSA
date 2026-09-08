//2. Find Second Largest Element

// input 
// [10, 5, 8, 20, 15]

//output 
//15


function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

console.log(secondLargest([10, 5, 8, 20, 15]));

// Complexity:
// Time: O(n)
// Space: O(1)


//Duplicate case
//console.log(secondLargest([10, 20, 20, 5]));
// Output:  10

// If interviewer asks: "What if there is no second distinct largest?"
// console.log(secondLargest([10, 10, 10]));
// null