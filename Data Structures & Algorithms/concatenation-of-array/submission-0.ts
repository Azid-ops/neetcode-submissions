class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let newArray = [];
        let i = 0;
        while(i <= 1) {
            for(let item of nums) {
                newArray.push(item);
            }
            i++;
        }
        return newArray;
    }
}
