var findMedianSortedArrays = function(nums1, nums2) {
  const findNext = ([index1, index2]) => {
    if (index1 + 1 == nums1.length) return [index1, index2 + 1];
    if (index2 + 1 == nums2.length) return [index1 + 1, index2];

    const num1 = nums1[index1 + 1];
    const num2 = nums2[index2 + 1];

    if (num1 < num2) return [index1 + 1, index2];

    return [index1, index2 + 1];
  }

  const findVisited = ([index1, index2]) => {
    if (index1 < 0) return nums2[index2];
    if (index2 < 0) return nums1[index1];

    return Math.max(nums1[index1], nums2[index2]);
  }

  const length = nums1.length + nums2.length;
  const isEvenLengthed = length % 2 === 0;
  const center = Math.floor(length / 2) - Number(isEvenLengthed);

  const [index1, index2] = [...new Array(center + 1)].reduce(findNext, [-1, -1]);

  const centerValue = findVisited([index1, index2]);

  if (!isEvenLengthed) return centerValue;

  const nextValue = findVisited(findNext([index1, index2]));
  const sum = centerValue + nextValue;

  return sum && sum / 2;
};
