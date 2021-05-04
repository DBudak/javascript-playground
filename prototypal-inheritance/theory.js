/*
  GENERAL:
    Prototypal inheritance !== class based inheritance.
    Javascript implementes Differential inheritance using prototypes

    In prototypal inheritance derived object LINKS all the state
    In class-based inheritance derived object COPIES all the state

  PROPERTY RESOLUTION LOOKUP:
    JS engines go up the prototype chain.
    Starting with the object property was invoked on
    Going through all its prototypes
    Ending with {} or Object.prototype

    Stops when a property is found during lookup
    If nothing found throws TypeError if property is a function, returns undefined otherwise
*/