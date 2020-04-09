/**
 * ES6-8
 * - well supported in all MODERN websites
 * - No support in older browsers;
 * - Can use MOST features in production with transpiling and polyfilling(converting to ES5)
 * 
 * 
 * Things we'll cover:
 * Variable Declarations with let and const
 * Blocks and IIFEs
 * Strings
 * Arrow Functions
 * Destructuring
 * Arrays
 * The Spread Operator
 * Rest and Default Parameters
 * Maps
 * Classes and subclasses
 * Promises
 * Native modules
 * 
 */

 /** Lecture: let and const 
  * 
  * const: is used when you want to set a variable that does not change, make a variable immutable;
  * const: has to be initialized as soon as it is declraed it CANNOT be declared and then initialized later on in the code
  * 
  * let: used for variables that can change
  * let: cannot be accessed before initialized
  * 
  * In ES6 variables declared with var are function scoped and variables declared with let are block scoped
  * 
  * USE LET AND CONST!!!!!
  * 
 */

//  // ES5
//  var name5 = 'Jane Smith';
//  var age5 = 23;
//  name5 = 'Jane Miller';
//  console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// //unable to change name6; uncomment to see error
// //name6 = 'Jane Miller';
// console.log(name6);

// // ES5
// function driversLicens5(passedTest){
//     if (passedTest) {
//         //calling a variable before it is initialized will produce undefined because of hoisting
//         console.log(firstName);
        
//         var firstName = 'john';
//         var yearOfBirth = 1990;
//         //console.log(firstName + ' ' + yearOfBirth);       
//     };
//     //var is function scoped so variables declared using var allows the use of the variables outside of the block they were declared in
//     console.log(firstName + ' ' + yearOfBirth); 
// };

// driversLicens5(true);

// //ES6
// function driversLicens6(passedTest){
//     if (passedTest) {
//          //let variables are hoisted but cannot be accessed before it is declared due to something called the temperal deadzone
//         //console.log(firstName);
//         let firstName = 'john';
//         //const has to be initialized as soon as it is declared; you can not declare it later on in the code
//         const yearOfBirth = 1990;
//         console.log(firstName + ' ' + yearOfBirth);       
//     };
//     //let and const are block scoped they will not work outside the block in which they were declared
//     //console.log(firstName + ' ' + yearOfBirth);  
// };

// driversLicens6(true);

// //This variable is differnt to the i variable inside the for loop below
// let i = 23;
// //this i is not the same one
// for (let i = 0; i < 5; i++){
//     //this i will be equal to the i counter variable
//     console.log(i);  
// };
// //This will still be 23
// console.log(i);

//This variable is the same i variable inside the for loop below
// var i = 23;
// //this i is the same one
// for (var i = 0; i < 5; i++){
//     //this i will be equal to the i counter variable
//     console.log(i);  
// };
// //This will be equal to 5 becuase of the for loop NOT 23
// console.log(i);

///////////// END LET AND CONST LECTURE /////////////////


/** Lecture: Blocks and IIFEs
 * With ES6 we can acheive the same data privacy as an Immediately Invoked Function Expression by using code inside curly brackets and using let and const variable declarations instead of var.
 * 
 * 
 */

//  //ES6
//  {
//      const a = 1;
//      let b = 2;
//      var c = 3;
//  };
// //this will not work becuase let and const are block scoped
// //console.log(a, b);
// //this will work becuase var is not block scoped
// console.log(c);

 
//  //ES5
//  (function(){
//     var c = 3;
//  })();
//  //this will not work because of data privacy with IIFEs
//  //console.log(c);

///////////// END BLOCKS AND IIFEs LECTURE /////////////////
 

/** Lecture: Strings
 * 
 * Template literals: replaces the need to use several different strings concatenated with + for variables by using the tick symbols `wrtie your string here with variables as ${variable/function here} and thats it`
 * 
 * Template literals can also be used when concatinating and starting a new variable
 * 
 * startsWith(): this method checks if the object it's checking starts with the passed in argument; it is case sensitive
 * 
 * endsWith(): this method checks if the object it's checking ends with the passed in argument; it is case sensitive
 * 
 * includes(): this method checks if the object it's checking includes the passed in argument; it is case sensitive
 * 
 * repeat(): this method repeats an object by the number passed in argument
 */

//  let firstName = 'John';
//  let lastName = 'Smith';
//  const yearOfBirth = 1990;
//  function calcAge(year) {
//      return 2020 - year;
//  };

//  //ES5
//  console.log('this is ' + firstName + ' ' + lastName + ' he was born in ' + yearOfBirth + ' today he is ' + calcAge(yearOfBirth) + ' years old.');

//  //ES6
//  console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`);

//  const n = `${firstName} ${lastName}`;
//  console.log(n.startsWith('J'));
//  console.log(n.endsWith('J'));
//  console.log(n.includes('J'));
//  console.log(firstName.repeat(5));
//  console.log(`${firstName} `.repeat(5));

///////////// END STRINGS LECTURE /////////////////

 
 /** Lecture: Arrow Functions: Basics
  * Arrow functions replace the need to use the function keyword with => the parameters are set before the => and the function code after, it also removes the need for return keyword when only one line of code see @arrowFunction below
  * 
  */

//  const years = [1990,1965,1988,2012,2018];

//  // ES5 
//  var ages5 = years.map(function(el){
//     return 2020 - el;
//  });
//  console.log(ages5);
 
//  // ES6 @arrowFunction
//  let ages6 = years.map(el => 2020 - el);
//  console.log(ages6);
//  // multiple parameters requires you wrap them around (param1, param2) => functionCode
//  ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
//  console.log(ages6);
//  // when the function code will have more than one line of code you will need to wrap the function code in {} like normal functions and will also need the return keyword
//  ages6 = years.map((el, index) => {
//      const now = new Date().getFullYear();
//      const age = now - el;
//      return `Age element ${index + 1}: ${age}.`
//  });
//  console.log(ages6);

 ///////////// END BASIC ARROW FUNCTIONS LECTURE /////////////////


/** Lecture: Arrow Functions: Lexical this keyword
 * Arrow functions DO NOT have their own this keyword, they use the keyword of the function they are written in, thus have a lexical  this keyword
 * 
 * Arrow functions are the best practice when and if you want to preserve the this keyword of the parent or surrounding function/object
 * 
 * 
 */

// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         //REMEMBER THE THIS KEYWORD POINTS TO THE OBJECT ONLY IN THE OBJECT METHOD AND NOT IN FUNCTIONS assigning a self variable that is set equal to this will work for the functions
//         var self = this;
//         //THE THIS KEYWORD IN FUNCTIONS WILL POINT TO THE GLOBAL OBJECT WHICH IS THE WINDOW OBJECT
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     },
// };

// //box5.clickMe();

// // ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         //Arrow functions share the keyword of it's surrounding function so no need for hack of var self = this;
//         //arrow funciton with no parameters are written as () => codeHere;
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     },
// };

//box6.clickMe();

// const box66 = {
//     color: 'green',
//     position: 1,
//     //changing the method to an arrow function instead of function keyword will utilize the parent this object which in this case is the global context or  window object, so do not use it for methods 
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     },
// };

// box66.clickMe();

// function Person(name) {
//     this.name = name;
// };

// // ES5
// Person.prototype.myFriends5 = function(friends){
//     var arr = friends.map(function(el){
//         //this keyword here will NOT work either becuase again it is inside a function surrounded by another function; so this will point to window object
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     //another trick is to use the bind() method and passing it this keyword; this will have the same effect as setting var self = this; before calling the new function
//     console.log(arr);
// };

// var friends = ['bob', 'john', 'steve'];
// var jane = new Person('jane').myFriends5(friends);

// //ES6
// Person.prototype.myFriends6 = function(friends){
//     let arr = friends.map((el) => 
//         `${this.name} is friends with ${el}`
//     );
//     console.log(arr);
// };

// let friends6 = ['bob6', 'john6', 'steve6'];
// let jane6 = new Person('jane6').myFriends6(friends);


 ///////////// END BASIC ARROW FUNCTIONS LECTURE /////////////////