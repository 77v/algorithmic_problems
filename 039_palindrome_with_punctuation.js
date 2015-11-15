// http://careercup.com/question?id=5653027102916608

// We know a string is Palindrome if it is the same reading from both sides.
// Now we define the following string also Palindrome:

// A man, a plan, a canal, Panama!

// Write a code that returns if an string is palindrome and it should return true for above input.

function isPalindrome(s) {
  var lo = 0;
  var hi = s.length - 1;

  while (lo < hi) {
    while (lo < hi && (s[lo] == ' ' || s[lo] == ',' || s[lo] == '!')) lo++;
    while (lo < hi && (s[hi] == ' ' || s[hi] == ',' || s[hi] == '!')) hi--;
    if (lo >= hi) return true;
    if (s[lo].toLowerCase() != s[hi].toLowerCase()) return false;
    lo++;
    hi--;
  }
  
  return true;
}

var s = 'A man, a plan, a canal, Panama';

console.log(isPalindrome(s));

