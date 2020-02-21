var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i === j) continue;

      const outerNum = nums[i];
      const innerNum = nums[j];

      if (outerNum + innerNum === target) return [i, j];
    }
  }
};
