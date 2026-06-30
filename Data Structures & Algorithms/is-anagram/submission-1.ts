class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        let charMap = new Map<string, number>();

        for(let char of s) {
            charMap.set(char, (charMap.get(char) || 0) + 1)
        }

        for(let char of t) {
            if(!charMap.has(char)) {
                return false;
            } 
            charMap.set(char, charMap.get(char) - 1)
        }

        for(let count of charMap.values()) {
            if(count !== 0) {
                return false;
            }
        }
        return true;
    }
}
