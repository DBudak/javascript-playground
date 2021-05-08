/*
  Classes in js are just syntax sugar on constructor functions.
  They hide some complexity and in return add some rules
*/

class Message {
  constructor(sender, recepient) {
    this.sender = sender;
    this.recepient = recepient;
  }
}

class TextMessage extends Message {
  constructor(sender,recepient, text) {
    super(sender, recepient);
    this.text = text
  }
}