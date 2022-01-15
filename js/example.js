
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
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
    
//       for (const potion of this.potions) {
//         if (potion.name === newPotion.name)
          
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     console.log(newPotion.name);
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const item = this.potions[i];
//       if (potionName === item.name) {
//         return this.potions.splice(i,1)
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const item = this.potions[i];
//       if (oldName === item.name) {
//         return item.name = newName;
//       }
//     }
//     return `Potion $(oldName) is not in inventory`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

// --------------

// console.log(atTheOldToad.removePotion("Dragon breath"));


// --------ЗАДАЧКА-----------------------------------------------------------------------------



// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].


// function deleteNth(arr,n){
//   // ...
// }

// -----мій недороблений варіант

// const numbers = [1, 3, 2, 5, 5, 5, 7, 8, 1, 4];

// const totalAmountOfNumber = numbers.reduce((acc, number) => ({ ...acc, [number]: acc[number] ? acc[number] + 1 : 1, }), {},);

// console.log(totalAmountOfNumber);

// const values = Object.values(totalAmountOfNumber);

// const keys = Object.keys(totalAmountOfNumber);

// // console.log(values);

// // console.log(keys);

// const fnA = function (array,values, n) {
// const newNumbers = [];
//         for (const arr of array) {
//                 // console.log(arr);
//   }
//   return newNumbers;
// }

// console.log(fnA(totalAmountOfNumber,values,2));


// ----робочий варіант Олега
// function deleteNth(arr, n) {
       
//         const result = [];

//         const total = {};
        
//   for (const number of arr) {
//     // console.log(number);
//     console.log(total[number]);
//             total[number] = total[number] ? total[number] + 1 : 1;

//     if (total[number] <= n) result.push(number);
    
//         }

//         return result;
// }

// console.log(deleteNth([1,1,2,2,2], 2));




// ----робочий варіант Іваніцького
// const a = (list, N) => {
//   const newList = [];
//   const repeat = {};
//   for (const element of list) {
//     if (repeat[element] === repeat[element]) {
//       repeat[element] += 1;
//       console.log(repeat[element]);
//     } else {
//       repeat[element] = 1;
//     }
//     if (repeat[element] <= N) {
//       newList.push(element);
//     }
//   }
//     console.log(newList)
// }


// console.log(a([1, 1, 1, 1, 1, 2, 2, 2, 2, 22, 3, 3, 34, 4, 4, 4, 5, 5], 2));

// -------------МОДУЛЬ 4----------------
// task 7
// возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(element => {
//           if (secondArray.includes(element)) {
//                   commonElements.push(element);
//           }
//   });

  

//   return commonElements;
  
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));


// task - 17-18
// const users =[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = users => {
        
//         const genders = users.map(user => user.gender);
    
//         return genders;
//   };


// console.log(getUserNames(users));


// task - 20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
// 	(genre, index, array) =>array.indexOf(genre) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);


// task - 21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book=>book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
 
// console.log(topRatedBooks);
// console.log(booksByAuthor);


// task - 30
// const firstArray = [26, 94, 36, 18];

// const eachElementInFirstIsEven = firstArray.every(value => value %2=== 0)
// console.log(eachElementInFirstIsEven);


// task - 35

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];



// const totalScore = players.reduce((total, player) => {
//   return total + player.playtime/player.gamesPlayed;
// }, 0);

// console.log(totalScore);

//    Задача 45
  
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//     // .filter(value => value.rating >= MIN_BOOK_RATING)
//     .map(book => book.author);
// 	// .sort((a,b) => a.localeCompare(b));
// console.log(names);

// ---------------МОДУЛЬ - 5


// task - 10
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
  
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             const item = this.items[i];
//             if (itemToRemove === item) {
//                 return this.items.splice(i, 1)
//             }
//         }
//     }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ------------- Изменение фото при клике ---------------


const magicBtn = document.querySelector(".js-magic-btn");

magicBtn.addEventListener("click", () => {
    const imageEl = document.querySelector(".img");

    imageEl.src = "./images/photo/02_2.jpg";
    imageEl.alt = "доыольный";
});