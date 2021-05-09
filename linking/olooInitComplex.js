const Message = {
  init(sender, recepient) {
    let _API_KEY = 'foobar'; // private property due to closures

    this.sender = sender; // public property
    this.recepient = recepient;

    this.logKey = function() { // public method
      console.log(_proccessAPIKEY());
    }

    function _proccessAPIKEY() { // private method due to closures
      return _API_KEY = _API_KEY + 'processed'; // some hashing happened here
    }

    return this;
  },

  log(){ 
    console.log(this.sender, this.recepient);
  }
};

const PingMessage = Object.create(Message); // now we have a ready to use template that we can pass around
PingMessage.log(); // undefined undefined

PingMessage.init('Me', 'John'); // now we have a full object
console.log(PingMessage._API_KEY); // undefined
PingMessage.logKey(); //foobarprocessed
PingMessage.log(); // Me, John

const TextMessage = Object.create(Message);

TextMessage.init = function TextMessage(sender,recepient, text){ // extending (inheriting) via links and init
  Message.init.call(this, sender, recepient);
  this.text = text;
  return this
}

TextMessage.init('Me', 'Einstein', 'How are you?');
TextMessage.log = function log() {
  console.log(this.sender, this.recepient, this.text);
}

TextMessage.log(); //'Me', 'Einstein', 'How are you?'