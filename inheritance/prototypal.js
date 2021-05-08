/*
  GENERAL:
    Prototypal inheritance !== class based inheritance.
    Javascript implementes Differential inheritance using prototypes

    In prototypal inheritance derived object LINKS all the state
    In class-based inheritance derived object COPIES all the state

  PROPERTY RESOLUTION LOOKUP:
    JS engines go up the prototype chain
    Starting with the object property was invoked on
    Going through all its prototypes
    Ending with {} or Object.prototype

    Stops when a property is found during lookup
    If nothing found throws TypeError if property is a function, returns undefined otherwise
  
  __proto__ vs .prototype:
    same idea. never use former, always latter. former is used by js engine for property lookup and 
    prototype chain traversals
*/

const biologicalEntity = {
  species: 'homo sapiens'
};

//Creates an object using () as a prototype
const male = Object.create(biologicalEntity);
male.sex = 'male';
male.age = 0;
male.grow = function grow() {
  this.age++;
}

console.log(Object.getPrototypeOf(male) === biologicalEntity); // true

console.log(male.species); // homo sapiens
console.log(male.sex); // male
console.log(male.age); // 0
male.grow();
console.log(male.age); //1

//More detailed setup via Object.create
// if second object is ommited all properties are set to true
const female = Object.create(biologicalEntity, {
  sex: {
    value: 'female', // default value
    enumerable: true, // self explanatory
    writable: false, //whether can be reassigned, false for immutable
    configurable: false //whether can be deleted or configured using property descriptor
  },
  age: {
    value: 0,
    enumerable: true,
    writable: false,
    configurable: false
  },
});