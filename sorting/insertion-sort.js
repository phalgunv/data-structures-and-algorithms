function insertionSort(nums) {
    for (let i = 0; i<nums.length; i++) {
        let val = nums[i];
        let j = i - 1;
        while (j>=0 && val < nums[j]) {
            nums[j+1] = nums[j];
            j--;
        }
        nums[j+1] = val;
    }
}