const biologicalEntity = {
  species: 'homo sapiens'
};

//Creates an object using () as a prototype
const male = Object.create(biologicalEntity);
male.sex = 'male';
male.age = 0;
male.grow = function grow(age) {
  this.age++;
}

console.log(Object.getPrototypeOf(male) === biologicalEntity); // true

console.log(male.species); // homo sapiens
console.log(male.sex); // male
console.log(male.age); // 0
male.grow(male.age);
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