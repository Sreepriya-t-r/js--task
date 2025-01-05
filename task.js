// 1) Check if all elements in an array are positive numbers.( using every () )
// let arr=[1,2,-23,10,-92,-29,-2,83,-40];
// let allPositive = arr.every(arr=>arr>0);
// console.log(allPositive);





// 2) Check if there is at least one negative number in the array.( using some() )
//  let arr=[1,2,23,-10];
//  let allPositive=arr.some(a=>a>0);
//  console.log(" Numbers: ",allPositive);



//  1.check if an array contains atleast one even number
// let x=[1,2,3,2,24,10,9,3];
// let even=x.some(a=>a%2==0);
// console.log(even);


// 2.find first even number in an array of interger
// let array=[1,20,94,39,83,29,82,9];
// let newArray=array.find(a=>a%2==0);
// console.log(newArray);



//  1) Check if any number is even in an array .
// const number= [1,2,3,4,5];
// const even=number.some(a=>a%2===0);
// console.log(even?"Array contains an even number":"Not found");



// 2) Check if any number is odd in an array
// const number= [12,2,32,42,52];
// const odd=number.some(a=>a%2!==0);
// console.log(odd?"Array contains an odd number":"Not found");


// 1)Reverse a Word
// const words=[ 'Reverse','aklsk'];
// const reverse=words.map(a=>a.split(''));
// console.log(reverse);


// 2) combine number as a string
// let x=[1,2,23,4,2];
// let combinedString=x.join('');
// console.log(combinedString);




//  const numbers = [1, 2, 3, 4, 5, 6];    Filter even numbers,  double the numbers,  sum them up.
// let array=[1,2,3,4,5,6];
// let newArray= array.filter(a=>a%2===0);
// console.log("Even Numbers:",newArray);
// let x=array.map(a=>a**2);
// console.log("Squared Numbers:",x);
// let y=array.reduce((sum,a)=>sum+a,0);
// console.log("Sum of Squares:",y);

// 1.count the number of Even numbers.
// let array=[1,20,94,39,83,29,82,9];
// let newArray=array.filter(a=>a%2==0).length;
// console.log(newArray);


// 2.filter number divisible by 3.
// let array=[1,20,94,39,83,29,82,9];
// let newArray=array.filter(a=>a%3==0);
// console.log(newArray);


//You are given an array of numbers, and you need to perform the following tasks:
// 1)Use the .filter() method to create a new array containing only the even numbers.
// let array=[1,20,94,39,83,29,82,9];
// let newArray=array.filter(a=>a%2==0);
// console.log(newArray);


// 2)Use the .map() method to square each number in the filtered array and return the results
// let array=[1,20,94,39,83,29,82,9];
// let newArray=array.filter(a=>a%2==0).map(a=>a**2);
// console.log(newArray);


// 1. Write a function to check if all numbers in an array are positive using the every method.
// let arr=[1,2,-23,10,-92,-29,-2,83,-40];
// let allPositive = arr.every(arr=>arr>0);
// console.log(allPositive);




// 2. Write another function to check if any number in the array is negative using the some method.
// let arr=[1,2,-23,10,-92,-29,-2,83,-40];
// let allPositive = arr.some(arr=>arr>0);
// console.log(allPositive);
