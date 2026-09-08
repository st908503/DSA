//1. Find Maximum / Minimum Element

//input 
// const arr = [5, 2, 9, 1, 7];

//output
// { min: 1, max: 9 }

function findMinMax(nums) {
    let max = nums[0]
    let min = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
        if (nums[i] < min) min = nums[i];
    }
    return { min, max }
}

console.log(findMinMax([5, 2, 9, 1, 7]))

// Complexity:
// Time: O(n)
// Space: O(1)

// Avoid sorting just to find min/max because sorting costs O(n log n).
