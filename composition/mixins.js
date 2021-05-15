/*
  Mixings is a combination of small objects.

  Composition promores HAS-A and USES-A relationships rather than IS-A of inheritance

  Compositions are expensive performance wise but solve the diamond of death, are more predictable than inheritance thanks to Object.assign interface 
  and allow multiple inheritance
*/

class Message {
  constructor(sender,recepient) {
    this.sender = sender;
    this.recepient = recepient;
  }
}

class PhoneCall extends Message {
  constructor(sender, receipient, phoneNumber){
    super(sender,receipient);
    this.phoneNumber = phoneNumber;
  }
  call(){
    console.log(`calling ${recepient}`)
  }
}

class Contact {
  constructor(name,avatar) {
    this.name = name;
    this.avatar = avatar;
  }
}

const Channel = {
  channelName: 'dev_memes',
  channelAdmin: 'dbudak'
}

const MessageApp = Object.assign(
  Message.prototype,
  new PhoneCall('dad', 'me', '8089099879'),
  new Contact('dbudak', 'jslogo.jpg'),
  Channel
);
console.log(JSON.stringify(MessageApp))