var bubbleSort = function(nums) {
    let sorted = false, temp;
    for (let totalSorted = 0; totalSorted < nums.length && !sorted; totalSorted++) {
        sorted = true;
        for (let i = 0; i < nums.length - 1 - totalSorted; i++) {
            if (nums[i] > nums[i+1]) {
                temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
                sorted = false;
            }
        }

    }
};