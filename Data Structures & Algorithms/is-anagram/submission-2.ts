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
            let count = charMap.get(char);
            if (!count) return false;
            charMap.set(char, count - 1);
        }
        return true;
    }
}
