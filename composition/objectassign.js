/*

  Major uses: shallow cloning and combining objects

  INTERESTING DETAIL #1:
    Assigning a value to existing proprty doesn't define how it behaves.
    Assignment falls back to defining behavior ONLY when property did not exist.
    In technical terms it means that for new properties JS uses [DefineOwnProperty] and for existing [Set] from object prototype.

    In practical terms if a proprty has a setter that setter is used when assigning a new value.
*/

// shallow clone example
const doge = {
  designation: 'good boi',
  makeSound: () => {console.log('woof')}
};

const copyCat = Object.assign({}, doge);

copyCat.makeSound = () => {console.log('meow')};

doge.makeSound(); // woof
copyCat.makeSound(); // meow

// combination example
const one = {
  number: 1
};

const two = {
  number: 2,
  foo: 'bar'
};

const combined = Object.assign({}, one, two);
console.log(JSON.stringify(combined)); // {"number":2,"foo":"bar"}