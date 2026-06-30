class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0;
        let j = numbers.length - 1;
        while((numbers[i] + numbers[j]) != target) {
            if((numbers[i] + numbers[j]) > target) {
                j--;
                continue;
            } else if((numbers[i] + numbers[j] )< target) {
                i++;
                continue;
            }
        }
        return [i+1,j+1];
    }
}
