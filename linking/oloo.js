/*
  OLOO - Objects Linked to other objects.

  Allows to avoid pitfal of inheritance such as prototype pollution, diamond problem etc.
  Not as efficient in terms of memory (negligible in most cases)

  Linking can be explicit (via Object.assign) of implicit (via prototype)
*/

// Implicit example
const PrototypeFoo = {
  lowerCase: function (m){
    return m.toLowerCase();
  }
};

const Foo = Object.create(PrototypeFoo);
Foo.log = function(m) {
  console.log(this.lowerCase(m)); // Accessed via implicit prototype linking
}

Foo.log('Hello') //hello


// Explicit example
const PrototypeBar = {
  format: function (m){
    return m.toUpperCase();
  }
};

const Bar = {
  upperCaser : PrototypeBar, // Explicitly linked in code
  log: function(m) {
    console.log(this.upperCaser.format(m))
  }
};

Bar.log('Hello') // HELLO