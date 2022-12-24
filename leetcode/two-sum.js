/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
     let map = {}
    
    for (let i = 0; i< nums.length; i++) {
        console.log(i);
        console.log(nums[i]);
        console.log(map[target - nums[i]]);
        if (Object.hasOwn(map, target - nums[i])) {
            return [i, map[target - nums[i]]]
        }
        map[nums[i]] = i
    }
};

let nums  = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, target))
