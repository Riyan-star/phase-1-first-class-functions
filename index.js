// 1️⃣ receivesAFunction: takes a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// 2️⃣ returnsANamedFunction: returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    console.log("This is a named function");
  }
  return namedFunction;
}

// 3️⃣ returnsAnAnonymousFunction: returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("This is an anonymous function");
  };
}
