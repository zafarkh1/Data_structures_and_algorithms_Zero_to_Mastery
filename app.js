const letters = ["a", "b", "c", "d", "e", "f"];

// lookup
letters[2]; // O(1)

// push
letters.push("g"); // O(1)

// pop
letters.pop(); // O(1)

// unshift
letters.unshift("initial"); // O(n)

// shift
letters.shift(); // O(n)

// splice
letters.splice(3, 0, "middle"); // O(n)

// console.log(letters);

//                              Reference type
const obj1 = { num: 1 };
const obj2 = obj1;
const obj3 = { num: 1 };

// console.log(obj1 === obj2); // true
// console.log(obj1 === obj3); // false
// console.log(obj2 === obj3    ); // false
// console.log(obj1.num === obj3.num); // true
// console.log(obj2.num === obj3.num); // true

// console.log(1===1);

//                             Context vs scope
// console.log(this); // equal to window object

//                             Implementing an array
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   getIndex(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     delete this.data[this.length - 1];
//     this.length--;
//     return this.data;
//   }

//   shift() {
//     this.shiftItems(-1);
//     delete this.data[this.length - 1];
//     this.length--;
//     return this.data;
//   }

//   unshift(item) {
//     this.shiftItems(1);
//     this.data[0] = item;
//     this.length++;
//     return this.data;
//   }

//   shiftItems(direction) {
//     if (direction > 0) {
//       for (let i = this.length; i > 0; i--) {
//         this.data[i] = this.data[i - 1];
//       }
//     } else if (direction < 0) {
//       for (let i = 0; i < this.length; i++) {
//         this.data[i] = this.data[i + 1];
//       }
//     }
//   }
// }

// const newArray = new MyArray();

// newArray.getIndex();

// newArray.push("I");
// newArray.push("miss");
// newArray.push("you");

// newArray.pop();
// newArray.pop();

// newArray.unshift("Nigora");
// newArray.shift();

//                                                Reverse a string
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Oops check, what are you writing";
  } else {
    // Method 1
    //   return str.split("").reverse().join("");

    // Method 2
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  }
}

reverse("Hi my name is Nigora");

//                                            Merge sorted arrays
function mergeArrays(arr1, arr2) {
  const mergedArr = [];
  let firstVal = arr1[0];
  let secondVal = arr2[0];
  let i = 1;
  let j = 1;

  while (firstVal || secondVal) {
    if (!secondVal || firstVal < secondVal) {
      mergedArr.push(firstVal);
      firstVal = arr1[i];
      i++;
    } else {
      mergedArr.push(secondVal);
      secondVal = arr2[j];
      j++;
    }
  }
  console.log(mergedArr);
  return mergedArr;
}

mergeArrays([1, 4, 22], [2, 4, 10, 30]);
