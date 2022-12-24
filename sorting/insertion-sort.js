function insertionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        // Begin with the assumption that the array is divided into sorted and unsorted parts.
        // The first element is initially part of the sorted part. We compare subsequent elements from unsorted part
        // of the array with elements in the sorted part of the array.
        // If the current element from unsorted part is smaller than the element from the sorted part
        // we copy the that element to the next index in the array
        // Eventually, we when the inner loop stops, the current element form unsorted part
        // is copied to its correct position in the sorted part of the array.
        // With each iteration, elements get inserted into the sorted part of the array.
        let val = nums[i];
        let j = i - 1;
        while (j>=0 && val < nums[j]) {
            nums[j+1] = nums[j];
            j--;
        }
        nums[j+1] = val;
    }
}