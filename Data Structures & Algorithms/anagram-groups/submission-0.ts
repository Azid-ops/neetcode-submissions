class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const myMap = new Map<string, string[]>();
        for(let item of strs) {
            let sortedStr = item.split("").sort().join("");
            if(!myMap.has(sortedStr)) {
                myMap.set(sortedStr, []);
            }
            myMap.get(sortedStr).push(item);
        }
        return Array.from(myMap.values());
    }
}
