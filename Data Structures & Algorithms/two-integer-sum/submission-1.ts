class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let myMap = new Map<number, number>()
        let returnedArray= [];
        let myTarget = 0;
        for(let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if(myMap.has(complement)) {
                return [myMap.get(complement)!, i];
            }
            myMap.set(nums[i], i);
        }
        return []
    }
}
