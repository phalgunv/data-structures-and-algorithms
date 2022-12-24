function mergeSort(nums) {
    if (nums.length === 1) {
        return nums;
    }

    const mid = Math.floor(nums.length/2)
    const left = nums.slice(0, mid);
    const right = nums.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let leftIndex = 0, rightIndex = 0, result = [];
    const leftLength = left.length, rightLength = right.length;
    while(leftIndex < leftLength && rightIndex < rightLength ) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex])
            rightIndex++;
        }
    }
    result = result.concat(left.slice(leftIndex), right.slice(rightIndex));
    return result;
}

console.log(mergeSort([5, 4, 3, 2, 1]));