////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function vanillaSum(num1, num2) {
  return num1 + num2 + x;
}
console.log("1: ", vanillaSum(1, 2));
console.log("1: ", vanillaSum(5, 7));
console.log("");
// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const arrowSum = (num1, num2) => {
  return num1 + num2 + x;
};
console.log("2: ", arrowSum(4, 5));
console.log("2: ", arrowSum(9, 11));
console.log("");
// 3. Write a function that returns another function. (use arrow functions please)

const funcCeption = () => {
  const y = 9;
  const returnedFunc = (z) => x + y + z;
  return returnedFunc;
};
console.log("3: ", funcCeption()(5));
console.log("3: ", funcCeption()(8));
console.log("");

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log("4: ", getFunction()(2));
console.log(
  "4: " +
    " in this context, y is a variable INSIDE of getFunction. since insideFunc is declared INSIDE getFunction, it has access to the y variable... Scope or something like that. " +
    "EDIT: this is a closure! a closure gives access to an outer functions scope from an inner function!"
);
console.log(" ");

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const handleErrors = () => {
  try {
    let message = couldThrowError();
    console.log("Result: ", message);
  } catch (error) {
    console.log("Result: ", error.message);
    console.log("Sorry, there was an error");
  }
};
console.log("5: ");
handleErrors();
console.log("");

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 6. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const newObjectArrayMap = userData.map((item) => {
  const container = {};

  container.id = item.id;
  container.favoriteFoods = item.favorites.food;
  return container;
});

console.log("6: ", newObjectArrayMap);
console.log("");

// 7. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const newPizzaArray = userData.reduce((acc, curr) => {
  if (curr.favorites.food.includes("pizza")) {
    acc.push(curr.name);
  }
  return acc;
}, []);
console.log("7: ", newPizzaArray);
console.log("");

// 8. Show an an example of a switch statement being used

const switchExample = "grape";

switch (switchExample) {
  case "strawberry":
    console.log("Strawberry");
    break;
  case "orange":
    console.log("Orange");
    break;
  case "grape":
    console.log("8: Grape");
    break;
  default:
    console.log("Flavorless");
}
console.log("");

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// 9. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const combinedUserData = { ...userPersonalData, ...userGameData };
console.log("9: ", combinedUserData);
console.log("");

// 10. Make a copy of your new user object but override the birthday to december 31st

combinedUserData.birthday = "December 31st";
console.log("10: ", combinedUserData);
console.log("");

// 11. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const newAccomplishmentsArray = [...combinedUserData.accomplishments];
console.log("11: Accomplishments: ", newAccomplishmentsArray);
console.log("");

//  12.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable named food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

const { food } = user.favoriteThings;
console.log("12: ", food);
console.log("");

// 13. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [firstFood, secondFood] = food;
console.log("13: ", firstFood, ",", secondFood);
console.log("");

// 14. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

const [firstName, age, ...foodArray] = data;
// console.log("14: ", firstName, ",", age, ":", foodArray);
console.log("14: ");
console.log(firstName);
console.log(age);
console.log(foodArray);
console.log("");

// 15. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

const {
  name: userName,
  favorites: {
    needs: { food: favoriteFood },
    wants: {
      things: [favoriteThing, secondFavoriteThing],
    },
  },
} = userInfo;
console.log("15: ", {
  userName,
  favoriteFood,
  favoriteThing,
  secondFavoriteThing,
});
console.log("");

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("16: ");
fetchData().then(
  (value) => {
    console.log("16: ", value);
  },
  (error) => {
    console.log("16: ", error.message);
  }
);
console.log("");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("17: ");
const newFunction = async () => {
  try {
    const newVariable = await fetchData();
    console.log("17: ", newVariable);
  } catch (error) {
    console.log("17: ", error.message);
  }
};
newFunction();
