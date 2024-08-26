// 1-masala
// function countPositiveNumbers(arr: number[]): number {
//     let count = 0;
//     for (let num of arr) {
//         if (num > 0) {
//             count++;
//         }
//     }
//     return count;
// }

// const numbers = [-1, 2, -3, 4, 5];
// console.log(countPositiveNumbers(numbers)); // Natija: 3


// 2-masala
// function fizzBuzz(n: number): void {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// // Misol
// fizzBuzz(15);

// // 3-masala
// function sumArray(arr: number[]): number {
//     return arr.reduce((sum, num) => sum + num, 0);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // Natija: 15

// 4-masala
// function countWords(str: string): number {
//     return str.trim().split(/\s+/).length;
// }

// console.log(countWords("Hello, world!")); // Natija: 2

// 5-masala
// function findMax(arr: number[]): number {
//     if (arr.length === 0) return -Infinity;
    
//     return Math.max(...arr);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(findMax(numbers)); // Natija: 5

// 6-masala
// function findMin(arr: number[]): number {
//     if (arr.length === 0) return Infinity;
    
//     return Math.min(...arr);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(findMin(numbers)); // Natija: 1

// // 7-masala
// function contains(arr: number[], target: number): boolean {
//     return arr.includes(target);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(contains(numbers, 3)); // Natija: true
// console.log(contains(numbers, 6)); // Natija: false

// 8-masala
// function reverseArray(arr: number[]): number[] {
//     return arr.slice().reverse();
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(reverseArray(numbers)); // Natija: [5, 4, 3, 2, 1]

// 9-masala
// function capitalizeWords(str: string): string {
//     return str
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//         .join(' ');
// }

// console.log(capitalizeWords("this is a cat")); // Natija: "This Is A Cat"


// // 10-masala
// function average(arr: number[]): number {
//     if (arr.length === 0) return NaN;

//     const sum = arr.reduce((total, num) => total + num, 0);
    
//     return sum / arr.length;
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(average(numbers)); // Natija: 3
