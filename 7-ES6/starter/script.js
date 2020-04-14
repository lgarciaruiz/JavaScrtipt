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



 /** Lecture: Destructuring 
  * Destructuring: gives a very convinient way to extract data from a data structure like an object or an array
  * 
  * This works by declaring a varible, const used below, and then in the brackets declaring the name(s) of the variables and setting it equal to the data you want see @desctructuringES6 below
  * 
  * For objects you need to make sure the variable names match the key names in the obj. If you don't want them to match you need to set a 'show as' property by listing the key name followed by the show as property: keyNameInObject: diffVarName
  * 
 */

 // ES5
//  var john = ['john',26];
//  //var name = john[0];
//  //var age = john[1];

//  // ES6; @desctructuringES6 with arrays
//  let arr = ['john',26];
//  const [name, age] = arr;
//  //could also be set as
//  //const [name, age] = ['john',26];

//  console.log(name);
//  console.log(age);

//  // Destructuring with objects
//  const obj = {
//      firstName: 'john',
//      lastName: 'Smith'
//  };
//  //when destructuing with objects the variables have to match the key names
//  const {firstName, lastName} = obj;
//  console.log(firstName, lastName);

//  //If you don't want the variable names to match use this 
//  const {firstName:a, lastName:b} = obj; 
//  console.log(firstName, lastName);


//  // ES6
//  function calcAgeRetirement(year){
//      const age = new Date().getFullYear() - year;
//      //this returns an array with the current age at index0 and retirement age at index1; variables separated by comma
//      return [age, 65 - age];
//  }
// //you can then use destructuring to set the vars and use as you want
//  const [age2, retirement] = calcAgeRetirement(1988);
//  console.log(age2, retirement);
 


 ///////////// END DESCTRUCTURING LECTURE /////////////////


/** Lecture: ARRAYS 
 * Array.from(object); this will create an array from an ojbect that is not an array like a node list for example; see @arrayFrom
 * 
 * ForOf loop combines a foor loop with a forEach loop;
 * it is able to continue and break like the for loop but also uses a variable name instead of an index see @forOfLoop
 * 
 * findIndex(callBackFunction{code}) can use a callback function (arrowFunction in this example) and return the index of the first element that meets the code expression; this means if there are many that meet the condition only one will be returned; see @findIndex()
 * 
 * find(callBackFunctin{code}) can use a callback function (arrowFunction in this example) and return the data of the first element that meets the code expression; this means if there are many that meet the condition only one will be returned; see @find() 
 * 
 * */
//querySelectorAll returns a node list
// const boxes = document.querySelectorAll('.box');

// // //ES5 - turning a node list to an array we had to call the slice method from the array prototype and set the this keyword to poing to the node in the list
//  var boxesArr5 = Array.prototype.slice.call(boxes);
// // //aftr that we were able to use the forEach method on the newly created array
// // boxesArr5.forEach(function(cur){
// //     cur.style.backgroundColor = 'dodgerblue';
// // })

// //ES6 - turning a node list into an array is easier just use Array.from(passInList); @arrayFrom
// const boxesArr6 = Array.from(boxes);
// //after that you can use the forEach method; below we've used an arrow function for es6
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// //ES5 - loops that break/continue could only be written in a for loop;
// for (var i = 0; i < boxesArr5.length; i++){
//     if(boxesArr5[i].className === 'box blue'){
//         //continue will skip this iteration of the loop
//         continue;
//     }
//     boxesArr5[i].textContent = 'I changed to blue';
// }

// //ES6 - @forOfLoop
// for(const cur of boxesArr6){
//     //we can use the new includes() method on the string to not have to select the whole class listings
//     if(cur.className.includes('blue')){
//         continue;
//     }
//     cur.textContent = 'I changed again'
// }

// //ES5 to check indexes of a data element in an array and the data in it
// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(cur){
//     return cur >= 18;
// })

// console.log(full);
// //indexOf will return the index of the given argument
// console.log(full.indexOf(true));
// //to retrieve the data from the array 
// console.log(ages[full.indexOf(true)]);

// //ES6 - the findIndex(callBackFunction{code}) can use a callback function (arrowFunction in this example) and return the index of the first element that meets the code expression; @findIndex()
// console.log(ages.findIndex(cur => cur >= 18));
// //retrieving the data would look like below; it would only return the data that meets the condition no need for the index; @find()
// console.log(ages.find(cur => cur >= 18));


 ///////////// END ARRAY LECTURE /////////////////


 /** Lecture: The Spread Operator 
 * - Spread Operator: Expand elements of an array in places like arguments and function calls; see @spreadOperator
 * 
 * - the spread operator makes it so that where ever you pass the array you pass in the individual elements basically opens up the array
 * 
 * - the spread operator can also be used on node lists
 * 
 * */

//  function addFourAges(a,b,c,d){
//      return a + b + c + d;
//  }

//  var sum1 = addFourAges(18,30,12,21)
//  console.log(sum1);

//  //ES5 - passing elemnts of an array into a function that accepts individual elements
//  var ages = [18,30,12,21];
//  //apply will pass in the elements of the array as a individual parameters, it requires a this keyword first but in this case we don't need it so use null
//  var sum2 = addFourAges.apply(null,ages);
//  console.log(sum2);


//  //ES6 - the spread operator (...arrayName) will pass in the individual elements of the array @spreadOperator
//  const sum3 = addFourAges(...ages);
//  console.log(sum3);
 
//  const familySmith = ['john', 'jane', 'mark'];
//  const familyMiller = ['mary', 'bob', 'ann'];
//  //the spread operator can also be used to combine two or more arrays, including individual elements
//  const bigFamily = [...familyMiller, ...familySmith, 'baby'];
//  console.log(bigFamily);
 
//  //spread operator on node lists
//  const h = document.querySelector('h1');
//  const boxes = document.querySelectorAll('.box');
//  //node list is boxes since querySelectorAll returns a node list, h is a single node
//  const all = [h, ...boxes];
//  //turn list to an array and make changes (used forEach and arrow function)
//  Array.from(all).forEach(curr => curr.style.color =('purple'));


 ///////////// END SPREAD OPERATOR LECTURE /////////////////

 /** Lecture: Rest Parameters 
 * - Allow us to pass an arbritary number of elements into a function and use these arguments in that function
 * - Rest parameters use exactly the same syntax as spread operator but are the exact opposite;
 * - Rest parameters turn single elements into one array when we call a function with multiple parameters; see @restParameter
 * 
 * -The difference between spread operator and rest parameter is really in the name the operator does something to an array where it opens each element to be its own while the rest paramter is a paramter to a function and creates an array off of multiple parameters
 * 
 * */

 //ES5 - when you want an unspecified amount of arguments simply leave the parameters blank
//  function isFullAge5() {
//      //arguments is the keyword that you have access to, to see the arguments passed into a function; arguments will returns something that looks like an array but it's not an array
//     console.log(arguments);
//     //turn arguments into an array again by using call to set the this keyword to arguments and using the arrayprototyp slice method
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(function(curr) {
//         console.log(2020 - curr >= 18);
//     });
//  }

//  isFullAge5(1990,2018,1988);
//  isFullAge5(1990,2018,1987,2015,1955);


//  //ES6 - @restParameter (...nameOfVarible) once function is called the rest parameter will turn the input into an array
//  function isFullAge6(...years){
//      //this IS an array
//      //console.log(year);
//      years.forEach(cur => console.log(2020 - cur >= 18));
//  }

//  isFullAge6(1990,2018,1988);
//  isFullAge6(1990,2018,1987,2015,1955);


 //ES5 - having a paramter among many others is still somthing we can do
//  function isFullAge5(limit) {
//      //includes 21 (limit passed in)
//      console.log(arguments);
     
//      //simply add 1 (or the index at which you want the slice method to start creating the array)
//     var argsArr = Array.prototype.slice.call(arguments,1);
//     //will not include 21 becuase we started slicing at position 1
//     console.log(argsArr);
    
//     argsArr.forEach(function(curr) {
//         //using the limit paramter
//        console.log(2020 - curr >= limit);
//    });
// }
// //passing in the parameter needed first (21 in this case) in conjuction with slicing at position 1 allows to have a parameter to check against when passing in other data 
// isFullAge5(21,1990,2018,1988);
// isFullAge5(16,1990,2018,1987,2015,1955);


// //ES6
// function isFullAge6(limit, ...years){

//     years.forEach(cur => console.log(2020 - cur >= limit));
// }

// isFullAge6(21,1990,2018,1988);
// isFullAge6(23,1990,2018,1987,2015,1955);


 ///////////// END REST PARAMETERS LECTURE /////////////////


 /** Lecture: Default Parameters 
 * Default Parameters: Used when we want one or more parameters of a function to be pre-set or default
 * 
 * -this default paramters get set up in the parameters when declaring a function; in the example below param2 has a default parameter
 * function defaultParametersExample(param1, param2 = 'defaultSetting'){code}
 * 
 * */

 //ES5 - default parameters were used by using if statments to check whether the other parameters are null
//  function SmithPerson5(firstName,yearOfBirth, lastName, nationality) {
//      lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//      nationality === undefined ? nationality = 'American' : nationality = nationality;
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.yearOfBirth = yearOfBirth;
//      this.nationality = nationality;
//  };

//  var john5 = new SmithPerson5('john', 1990);
//  var emily5 = new SmithPerson5('Emily', 1980 , 'Diaz', 'Spanish');

//  //ES6 - defaults can be setup when declaring the paramaters of a function
//  function SmithPerson6(firstName,yearOfBirth, lastName = 'Smith', nationality = 'American') {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// };

// var john6 = new SmithPerson6('john', 1990);
// var emily6 = new SmithPerson6('Emily', 1980 , 'Diaz', 'Spanish');

///////////// END DEFAULT PARAMETERS LECTURE /////////////////



/** Lecture: MAPS
 * -HashMaps or Maps are something new in ES6; where before we had to use javascript objects now we have Maps, a new key data value structure.
 * 
 * -Maps allow you to use ANY primitive value or object and functions for the key, objects only allows strings.
 * -Maps are also iterable (loop through items); objects are not
 * 
 * - set(): adds elements to the map, map.set(key, data)
 * - delete(): deletes elements from map, map.delete(key)
 * - has(): checks if map contains an element, map.has(key)
 * -clear(): deletes everything from map;
 * 
 * */
 //ES6 - create a new map
//  const question = new Map();
//  //add values with key and data to the map (key, data)
//  question.set('Question','What is the official name of the latest major JavaScript version?'); 
//  question.set(1, 'ES5');
//  question.set(2, 'ES6');
//  question.set(3, 'ES2015');
//  question.set(4, 'ES7');
//  question.set('correct', 3);
//  question.set(true, 'Correct answer!');
//  question.set(false, 'Wrong, please try again!');

//  console.log(question.get('Question'));
//  console.log(question.size);
 
//  if(question.has(4)){
//      //question.delete(4);
//      console.log('answer 4 is here')
//  }

//  //question.clear();

//  //for each loop with map, this has access to the value and the key
// //  question.forEach((value, key) => console.log(`this is ${key} an it's set to ${value}`));

// // access values and key with forof loop
// //  for(let key of question){
// //     console.log(key);
// //     console.log(question.get(key[0]));
// //  }

// //access values using destructuring
//  for(let [key, value] of question.entries()){
//     //  console.log(`this is ${key} an it's set to ${value}`);    
//     if(typeof(key) === 'number'){
//         console.log(`Answer ${key}: ${value}`);
        
//     }
//  }
// //get the answer from user and parse it as an int
//  const ans = parseInt(prompt('Enter correct answer:'));
//  //console log if its right or wrong simply by checking if answer is equal to the correct answer and getting the key for true or false
//  console.log(question.get(ans === question.get('correct')));

///////////// END MAPS LECTURE /////////////////


/** Lecture: Classes
 * Classes: In ES6 classes make it easier to implement inheritance and create objects based on blueprints (function constructor in ES5)
 * - adding methods to the prototype is done within the class; no need to say ClassExample.prototype.newMethod = fucntion (param){code}
 * -you can only have methods on classes, not function properties although function properties are not best practice
 * -classes need a constructor
 * -You can also have static classes however the new objects created off of the class (new isntances) will not inherit it; this static method will simply be a method you can use on the class itself
 * 
 * -CLASS definitions are NOT hoisted; so you will need to declare a class first and then start using it; this is unlike function constructors
 * 
 * */

 //ES5 Classes using function constructor; below as a function expression could also use a function declaration: function Person5()
//  var Person5 = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//  };

//  //adding a method to the prototype was done this way in ES5
//  Person5.prototype.calcAge = function(){
//      var age = new Date().getFullYear() - this.yearOfBirth;
//      console.log(age);
//  };

//  var john5 = new Person5('john',1988, 'student');
//  john5.calcAge();


// //ES6 - classes
// class Person6 {
//     //needs a construtor, very similar to java
//     constructor (name,yearOfBirth,job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
//     //functions can be written in the class itself and get added to the prototype of the class; again similar to java
//     calcAge(){
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hey There!')
//     }
// }

// const john6 = new Person6('john', 1986, 'student');

// Person6.greeting();

// ///////////// END CLASSES LECTURE /////////////////

/** Lecture: Classes and Subclasses 
 * Subclasses in ES6 are easier to write to have them inherit methods and have the correct prototype change; 
 * use the extends keyword to have a class inherit a supercalss see @extends
 * - in ES6 subclasses still need to pass and accept the params of the superclass. give the superclass its methods by using the super(param1, param2) method
 * 
 * ES6 IS EASIER FOR THIS
 * 
 * */

 //ES5 - inheritance between classes
 //Person5 is superclass
//  var Person5 = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//  };

//  Person5.prototype.calcAge = function(){
//      var age = new Date().getFullYear() - this.yearOfBirth;
//      console.log(age);
//  };

//  //adding althete subclass; need to pass in the same three params as Person5 (superclass)
//  var Athlete5 = function(name,yearOfBirth,job, olympicGames, medals){
//      //need to call Person5 and set the this keyword to this (Athlete class) and give it its needed params
//     Person5.call(this,name,yearOfBirth,job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//  }

//  //need to create the correct prototype chain using Ojbect.create() method and passing in the person5 prototype
//  Athlete5.prototype = Object.create(Person5.prototype);

 
//  //you can still add methods to the subclasses of a superclass
//  Athlete5.prototype.wonMedal = function(){
//     this.medals ++;
//     console.log(this.medals);
    
// }
 
//  var leo5 = new Athlete5('leo',1988,'engineer',5,5);
//  leo5.calcAge();
//  leo5.wonMedal();


//  //ES6 inheritance and subclasses
// class Person6 {
//     constructor (name,yearOfBirth,job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calcAge(){
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }
// }

// //use extends to inherit a superclass; @extends
// class Athlete6 extends Person6 {
//     //still need to have the supercalss' params
//     constructor(name,yearOfBirth,job,olympicGames,medals){
//         //pass the superclass it's params
//         super(name,yearOfBirth,job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedal(){
//         this.medals ++;
//         console.log(this.medals); 
//     }
// }

// const leo6 = new Athlete6('Leo', 1988, 'engineer', 3, 10);
// leo6.wonMedal();
// leo6.calcAge();

///////////// END CLASSES AND SUBCLASSES LECTURE /////////////////


/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area) ?
2. Average age of each town's park (forumla: sum of all ages/number of parks) ?
3. The name of the park that has more than 1000 trees  ?
4. Total and average length of the town's streets ?
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal ?

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Town{
    constructor(townName){
        this.name = townName;
            
        this.parkData = new Map();
        this.stData = new Map();

    }
    addPark(parkName,parkObj){
        this.parkData.set(parkName,parkObj);
    }

    addStreet(stName,stObj){
        this.stData.set(stName,stObj);
    }

    getNumParks(){
        return this.parkData.size;
    }

    getNumStreets(){
        return this.stData.size;
    }

    getParks(){
        return this.parkData;
    }

    getStreets(){
        return this.stData;
    }

    getParkWithNumTrees(numberOfTrees){
        for (let [key, value] of this.parkData.entries()){
            if (value.getNumTrees() >= numberOfTrees){                
                return key;
            }
        }
        return -1;
    }

    parksAvgAge(){
        let age = 0;
        this.parkData.forEach((value) => age += value.getAge());
        return age/this.getNumParks();
    }

    getTotalStLength(){
        let total = 0;
        this.stData.forEach((value) => total += value.getLength());
        return total;
    }

    stAvgLength(){
        return this.getTotalStLength() / this.getNumStreets();
    }

    getStClass(){
        let stMap = new Map();
        this.stData.forEach((value, key) => stMap.set(key,value.getSize()));
        return stMap;
    }

    printStClass(){
        let classes = this.getStClass();
        classes.forEach((value,key) => console.log(`${key}'s classification is ${value}`));
    }

}

class Park extends Town{
    constructor(townName,parkName,parkAge,numTrees,parkArea){
        super(townName);
        this.numTrees = numTrees;
        this.parkArea = parkArea;
        this.parkAge = parkAge;
        this.parkName = parkName;
    }

    getArea(){
        return this.parkArea;
    }

    getAge(){
        return this.parkAge;
    }

    getName(){
        return this.parkName;
    }

    getNumTrees(){
        return this.numTrees;
    }

    getTreeDenisity(){
        return this.numTrees/this.parkArea;
    }
}

class Street extends Town{
    constructor(townName,stName,stLength,size = 'normal'){
        super(townName);
        this.stName = stName;
        this.stLength = stLength;
        this.size = size;
    }

    getSize(){
        return this.size;
    }

    getLength(){
        return this.stLength;
    }

    getName(){
        return this.stName;
    }
}

let buckeye = new Town('Buckeye');
let buckeyePark = new Park('Buckeye','Park of Buckeye',30,50,500);
let avondalePark = new Park('Buckeye','Park of Avondale',50,80,1000);
buckeye.addPark(buckeyePark.getName(),buckeyePark);
buckeye.addPark(avondalePark.getName(),avondalePark);
console.log(buckeye.getNumParks());
console.log(buckeyePark.getTreeDenisity());
console.log(buckeye.getParkWithNumTrees(80));
console.log(buckeye.parksAvgAge());
console.log(buckeye.getParks());

let maricopaStreet = new Street(buckeye.name,'Maricopa St', 50, 'Medium');
let willowStreet = new Street(buckeye.name,'Willow St', 80, 'Large');
buckeye.addStreet(maricopaStreet.getName(),maricopaStreet);
buckeye.addStreet(willowStreet.getName(),willowStreet);

console.log(buckeye.getTotalStLength());
console.log(buckeye.stAvgLength());
console.log(buckeye.printStClass());

function getAllTreeDensity(){
    let parks = buckeye.getParks();
    for(let [park,parkData] of parks){
        console.log(`${park} has a tree density of ${parkData.getTreeDenisity()}`);
    }
};

getAllTreeDensity();


