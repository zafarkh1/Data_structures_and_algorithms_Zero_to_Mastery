//                                      Linear time => O(n)

// const team = ['Barcelona']
// const randomWords = ['a', 'b', 'c', 'd', 'e', 'f', 'Barcelona', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']
// let moreItems = new Array(10).fill('Barcelona')

// function findBestTeam (club) {
//     const t0 = performance.now()
//     for (let i = 0; i < club.length; i++) {
//         if (club[i] === 'Barcelona') {
//             console.log('Best team found ...')
//         }
//     }
//     const t1 = performance.now()
//     console.log(`It took ${t1-t0} milliseconds`);
// }

// findBestTeam(moreItems)

//                                      Constant time => O(1)

// const letters = ['a', 'b', 'c', 'd', 'e', 'f']

// function getFirstTwoItem (item) {
//     console.log(item[0])
//     console.log(item[1]);
// }

// getFirstTwoItem(letters)

//                                      Exercise 1
// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//     let a = 10;
//     a = 50 + 3;

//     for (let i = 0; i < input.length; i++) {
//       anotherFunction();
//       let stranger = true;
//       a++;
//     }
//     return a;
//   }

//                                      Exercise 2
// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//     let a = 5; // O(1)
//     let b = 10; // O(1)
//     let c = 50; // O(1)
//     for (let i = 0; i < input; i++) { // O(n)
//       let x = i + 1; // O(n)
//       let y = i + 2; // O(n)
//       let z = i + 3; // O(n)

//     }
//     for (let j = 0; j < input; j++) { // O(n)
//       let p = j * 2; // O(n)
//       let q = j * 2; // O(n)
//     }
//     let whoAmI = "I don't know"; // O(1)
//   }
//   // Big O = 4 + 7n = O(n)

//                                   Rule 1 => worst case
// const letters = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "Zafar",
// ];

// function findMyName(names) {
//   for (let i = 0; i < names.length; i++) {
//     console.log("Running");
//     if (names[i] === "Zafar") {
//       console.log(`It's my name`);
//       break;
//     }
//   }
// }

// findMyName(letters);

//                                     Rule 2 => remove constants
// let nums = [1, 2, 3, 4, 5, 6, 7];

// function findEl(item) {
//   let a = 10; // O(1)
//   a = 50 - 32; // O(1)

//   for (let i = 0; i < item.length; i++) {
//     console.log("HI"); // O(n)
//     a++; // O(n)
//   }

//   return a; O(1)
// }

// findEl(nums)
// // O(3 + 2n)  -
// // n          +

//                                      Rule 3 => Different inputs should have different variables
// let arr1 = ["a", "b", "c"];
// let arr2 = [1, 2, 3];

// function justExample(array1, array2) {
//   array1.forEach((el) => console.log(el));
//   array2.forEach((el) => console.log(el));
// }

// justExample(arr1, arr2); // O ( a + b )

//                                       O(n^2)
// let nums = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < nums.length; i++) {
//     // console.log(nums[i]);
//   for (let j = 0; j < nums.length; j++) {
//     console.log(nums[i], nums[j]);
//   }
// }

//                                        Rule 4 => Drop Non-dominant terms
// function getAllNumbersAndTheirPairSums(nums) {
//   console.log("These are numbers");

//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//   }

//   console.log(`These are their pairs' sums`);

//   for (let j = 0; j < nums.length; j++) {
//     for (let k = 0; k < nums.length; k++) {
//       console.log(nums[j] + nums[k]);
//     }
//   }
// }

// getAllNumbersAndTheirPairSums([1, 2, 3, 4, 5]);

//                               Example
// const tweets = ["hi", "hello", "alright", "whats up"];

// tweets[0];
// tweets[tweets.length - 1];

//                              Loops
const randomLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'Barcelona', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n']

function findLetterN1 (item) {
    for (let i = 0; i < item.length; i++) {
        if (item[i] === 'n') {
            console.log('Found => for loop');
        }
    }
}

const findLetterN2 = randomLetters => randomLetters.forEach(item => {
    if(item === 'n') {
        console.log('Found => forEach');
    }
})

const findLetterN3 = randomLetters => {
    for (const item of randomLetters) {
        if(item === 'n') {
            console.log('Found => for of loop');
        }
    }
}

findLetterN1(randomLetters)
findLetterN2(randomLetters)
findLetterN3(randomLetters)