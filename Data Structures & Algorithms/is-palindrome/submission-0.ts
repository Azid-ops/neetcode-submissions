class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let myString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let i = 0;
        let j = myString.length -1;
        
        while(i< j) {    
            if(myString[i] != myString[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
