// Implement a simple auto-suggest system:
// Given an array of words and a user input, return possible suggestions.

// Example:-
const words = ["apple", "banana", "grape", "apricot", "avocado"];

function autoSuggest(a) {
      return  words.filter(word => word.includes(a));
}

console.log(autoSuggest("app")); 

