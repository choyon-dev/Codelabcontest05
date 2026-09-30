function missingNumber(nums) {
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

// let test = missingNumber([1, 4, 7, 10]);

// let test = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
let test = missingNumber([0, 1, 2, 3, 4, 6]);

console.log(test);