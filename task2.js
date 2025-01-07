
const prompt=require('prompt-sync')({sigint:true});
// 1) Check if a word start with a specific letter
// let str=prompt("word : ");
// console.log(str.startsWith('K'));


//  Replace spaces with Hyphens
// Replace spaces with Hyphens
// let str1 =prompt("word: ");
// console.log(str1.replaceAll(" ","-"));



//  1) Check if a word ends with a specific letter
// let str=prompt("word : ");
// console.log(str.endsWith('K'));

// Split a paragraph into words of array.
// let str3=prompt("paragraph : ");
// console.log(str3.split(' '));


//  check if a string includes a specific substring?
// let str4=prompt("Substring or not: ");
// console.log(str4.includes("world")); 


// Write a program to capitalize the first and last character of each word in a string.



//  using array methods and string methods reverse a string.
// let str = prompt("Enter a string:");
// console.log(str.split('').reverse().join(''));
 

// //  Check whether a string is palindrome or not using array method.
// let str = prompt("Enter a string:");
// let isPalindrome=str.toLowerCase().split('').reverse().join('');
// console.log(isPalindrome);


// Given a 3-dimensional array, perform the following tasks:
//   Convert the 3D array into a single-dimensional array.
//   Find the highest number in the array.
//   Remove the 3rd number (index 2) from the array and add 2 new numbers of your choice to the array.

// let array=[[17,[22,33],25],71,38];
// let flat=array.flat(Infinity);
// let newArray=flat.reduce((a,b)=>a>b?a:b);
// flat.splice(2,1,34,100);

// console.log(flat);



//  To check if a string is a palindrome
// let str = prompt("Enter a string:");
// let isPalindrome=str.toLowerCase().split('').reverse().join('');
// console.log(isPalindrome);


//  1.  Construct a  3 dimentional array and covert it into a 2 dimentional array.
// let array = [[[1,2],[3,4]],[[5,6],[7,8]],[[9,10],[11,12]]];
// let x=array.flat(1);
// console.log(x);


//  Str="7/8*2+12"  evaluate this string  without type conversion.
let  Str="7/8*2+12";
let x=eval(Str);
console.log(x);

// Remove an element at a specific index
let array=[10,20,30,40,50];
array.splice(2,1);
console.log(array);
