/*
  Classes in js are just syntax sugar on constructor functions.
  They hide some complexity and in return add some rules


  Inherited properties are shared. Any change to base object will ripple to all instances.
  Above leads to prototype pollution. Classes or constructor functions solve this problem.
  
  Private variables and methods are prefixed with #. They are implemented via cosures in constructor functions
*/

class Message {
  constructor(sender, recepient) {
    this.sender = sender;
    this.recepient = recepient;
  }

  sendMessage() {
    console.log(`Message sent to ${sender}`);
  }

}

/*
  Above is equivalent (and is syntatic sugar) to
  function Message(sender, recepient) {
    this.sender = sender;
    this.recepient = recepient
  }

  Message.prototype.sendMessage =  function sendMessage() {
    console.log(`Message sent to ${sender}`);
  }
*/

class TextMessage extends Message {
  #secret = 'API_KEY' // private proposal in TC39
  constructor(sender,recepient, text) {
    super(sender, recepient);
    this.text = text
  }

  static #processSecret(secret) {
    return secret = secret + '_processed';
  }

  getSecret() {
    return TextMessage.#processSecret(this.#secret);
  }
}

const advice = new TextMessage('Dad', 'Me', 'Find a real job, son');
console.log(advice.sender) // Dad
console.log(advice.getSecret()); // API_KEY_processed
//console.log(advice.#secret) // Syntax Error
//console.log(advice.processSecret()); // Error
