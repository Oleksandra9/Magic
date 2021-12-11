
// let elementHeight = 1300.16472
// console.log(Number(elementHeight.toFixed(2)));

// ---------------------------------------------

// const a = 2;
// const b = 5;

// console.log(Math.pow(a,b)); 
// console.log(a ** b);

// ---------------------------------------

// let base = prompt("Введи любое произвольное число от 1 до 9");
// base = Number(base);

// let power = prompt("введи любое произвольное число для степени  от 1 до 5");
// power = Number(power);

// const result = (base ** power);

// console.log(result);

// -----------------------------------------------

// function multiply(x, y, z) {
//   console.log(x * y * z);
// }
// multiply(2, 3, 5); 
// multiply(4, 8, 12); 
// multiply(17, 6, 25);
// ----------------------------------




// let title = "Ten secrets of JavaScript";

// const friends = "Mango"

// friends[1] = "Banana";
// console.log(friends);

// console.log(friends.slice(" "));


// const names = ["Mango", "why", "not", "my"]
// console.log(names.join(" - "));
// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"


// let vegetables = ['parsnip', 'potato']
// let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
// vegetables.push(...moreVegs);

// console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

// const colors = ["red", "green"];
// colors.splice(1, 0, "yellow");
// console.log(colors); 

// const months = ['Jan', 'March'];
// months.splice(1, 1, 'Feb');
// // inserts at index 1
// console.log(months);


// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array2.concat(array1);

// console.log(array3);


// function makeArray(firstArray, secondArray, maxLength) {
//     const makeArray = firstArray.concat(secondArray);
//     const makeArrayLong = makeArray.length;
//     if (makeArrayLong > maxLength) {
//         return makeArray.slice(0, maxLength);
//     }
//     return makeArray;
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))

// task 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1 ) { // Change this line
//   console.log(i);
//     }

// task 18

// function calculateTotal(number) {
//     let result = 0;
//     for (let i = 1; i <= number; i += 1) {
       
//         result += i;
//     }
   
//     return result

// }
// calculateTotal();
// console.log(calculateTotal(24));


// task 19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0;i < fruits.length; i +=1) { 
//   const fruit = fruits[i]; 
//   console.log(fruit);
// }


// task 20
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i <= order.length - 1; i += 1) {
//         total += order[i];
//     }
//     return total;
// }

// console.log(calculateTotalPrice([164, 48, 291]));

// task 21
// function findLongestWord(string) {
//     let words = string.split(" ");
//     console.log(words);
    
//     let biggestWord = words[0];
//     for (const word of words) {
//         if (word.length > biggestWord.length) {
//             biggestWord = word;
            
//         }
        
//     }
// return biggestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// task 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
 
// for (let i = min; i <= max; i += 1) {
// numbers.push(i);
// }
  
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// task 23
// function filterArray(numbers, value) {
//     const filterArrayNew = [];
//     for (let i = 0; i <= numbers.length - 1; i += 1) {
//         console.log(numbers[i]);
//         if (numbers[i] >value ) {
//             filterArrayNew.push(numbers[i]);
            
//         }
//     }
//     return filterArrayNew;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 38));



// task 24
// function getCommonElements(array1, array2) {
//     const newArray = [];
//   for (const number of array1){
//   if (array2.includes(number)){
//   newArray.push(number);
//   }
    
//  }
//     return newArray;
   
// }


// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// -----------------------3 модуль----------------------------


// task12
// function countProps(object) {
//   let propCount = 0;

//     const keys = Object.keys(object);
//     for (const key of keys) {
//         // console.log(key);
//         propCount += 1;
// }  
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// task - 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const keys = Object.keys(salaries);
//     console.log(keys);
//     for (const key of keys) {
//         console.log(salaries[key]);
//         totalSalary += salaries[key];
//     }
  
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));


// task - 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// console.log(products);
// function getProductPrice(productName) {
//   // Change code below this line
//     for (const product of products) {
//         // console.log(product.name);
//         if (product.name === productName) {
           
//             return product.price;
//         } 
        
//     }
//     return null;
//   // Change code above this line
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// task - 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     let array = [];
//     for (const product of products) {
//         const keys = Object.keys(product);
//         for (const key of keys) {
//             if (key === propName) {
//                 array.push(product[key]);
//             }
//         }               
//     }
//     return array;
// }
  

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// task - 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     let total = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             total = product.price * product.quantity;
//         }            
//     }
   
//     return total;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));


// task - 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// console.log(highTemperatures.yesterday);
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// Change code above this line

// task - 30
// const date = {
//         completed: false,
//          category: "General",
//          priority: "Normal",
//     };
    
//     const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// task - 30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//     const priority = "Normal";
//     const op = {completed:false,category:"General",priority:"Normal"}
//     const opa = {...op,...data};
//     return opa;
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// task - 31
// function add(...args) {
//   let total = 0;
//     console.log(args);
//     for (const arg of args) {
//         console.log(arg);
//         total += arg;
        
//     }
    
//     return total;
// }
// console.log(add(15, 27));

// task - 33
// function findMatches(array,...args) {
//     const matches = [];
//     // console.log(array);
//     // console.log(args);
//     for (const ar of array) {
//         // console.log(ar);
//         for (const arg of args) {
//             // console.log(arg);
//             if (ar === arg) {
//                 matches.push(arg);
//             }
//         }       
//     }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));


// просто провірка
// const array4 = [1, 24, 56, 789];
// const array1 = [1, 2, 3, 4, 5,];
// const array2 = [9, 8, 7, 6,];
// const array3 = [array2,...array4,...array1];
// console.log(array3);

// task - 41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ], 
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    
      for (const potion of this.potions) {
        if (potion.name === newPotion.name)
          
        return `Error! Potion ${newPotion.name} is already in your inventory!`;   
    }
    console.log(newPotion.name);
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const item = this.potions[i];
      if (potionName === item.name) {
        return this.potions.splice(i,1)
      }
    }
    return `Potion ${potionName} is not in inventory!`
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const item = this.potions[i];
      if (oldName === item.name) {
        return item.name = newName;
      }
    }
    return `Potion $(oldName) is not in inventory`;
  },
};

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

// --------------

// console.log(atTheOldToad.removePotion("Dragon breath"));


// --------МОДУЛЬ - 4-----------------------------------------------------------------------------
