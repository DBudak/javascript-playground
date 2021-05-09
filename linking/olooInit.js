/*

  Init is like a constructor in classes with 1 difference:
  init separates construction and initialization (declaration and use).

  Akin to lazy evaluation and builder pattern
*/

const Message = {
  init(sender, recepient) {
    this.sender = sender;
    this.recepient = recepient;
    return this;
  },

  log(){
    console.log(this.sender, this.recepient);
  }
};

const TextMessage = Object.create(Message); // now we have a ready to use template that we can pass around
TextMessage.log(); // undefined undefined

TextMessage.init('Me', 'John'); // now we have a full object
TextMessage.log(); // Me, John