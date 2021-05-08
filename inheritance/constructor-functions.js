/*
  Less fragile inheritance, 'poor mans classes'

  New keyword is important to correctly bind scope. Write protection from it.
*/

function Message(sender, recipient) {
  this.sender = sender
  this.recipient = recipient
}

function TextMessage(text, sender, recipient) {
  if(!new.target) return new TextMessage(sender,recipient); // protection from the case when new kleyword is forgotten
  Message.call(this, sender, recipient); // poor mans 'super()'

  this.text = text;
  this.logMessage = function logMessage() {
    console.log(this.text);
  }
}


const advice = new TextMessage('Find a real job, son', 'Dad', 'Me');
advice.logMessage(); // 'Find a real job, son'
console.log(advice.sender) // 'Dad'