var twoSum = function(nums, target) {
  let values = {};

  for (let i = 0; i < nums.length; i++) {
    const num = values[i];
    values[num] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const neededNum = target - nums[i];
    const neededIndex = values[neededNum];

    if (i === neededIndex) continue;
    if (neededIndex !== undefined) return [i, neededIndex];
  }
};
