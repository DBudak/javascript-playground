// this is a more prefered module pattern over object namespace
// result can be assigned to a variable

(function IIFE(/*here you can read some external data*/){
  //this is private part, accessible in return object due to functional scopes and closures
  const privateVar = 'i am private';

  function privateFunction(){
    console.log('i am private')
  }

  //this is exposed part
  return {
    publicFunction: function(){console.log('i am public')},
    publicVar: 'i am public',
    privateVarGetter: console.log(`Private value is ${privateVar}`),
    publicUsingPrivate: function(){
      privateFunction();
    }
  }
})(/*here you can pass some external data*/);