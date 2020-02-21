var twoSum = function(nums, target) {
  const values = nums.reduce((map, num, i) => map.set(num, i), new Map());

  const indices = nums.reduce((answer, num, i) => {
    if (answer) return answer;

    const neededNum = target - num;
    const neededIndex = values.get(neededNum);

    if (neededIndex === i) return;
    if (neededIndex !== undefined) return [i, neededIndex];
  }, undefined);

  return indices;
};
