// Note: this in my opinion is the simplest, but the also least robust of native JS modularizing implementations
// since in the end you still pollute and interact with the the global scope

// window for browser, global for node environment
global.NamespacedObject = {
  calculate: () => {console.log('calculated')}
  //all methods go here
}

NamespacedObject.calculate();