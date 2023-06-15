function receivesAFunction(callback) {
    console.log(callback());
  }
function returnsANamedFunction() {
    return function namedFunction() {
      // Function body (can be empty or contain logic)
    };
  }
function returnsAnAnonymousFunction(){
    return function (){
    }
}