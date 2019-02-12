// function sum() {
//   const arr = Array.from(arguments); 
//   let total = 0; 

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i]; 
//   }

//   return total; 
// }

function sum(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

// Function.prototype.myBind = function() {
//   const args = Array.from(arguments); 
//   const context = args[0];
//   const other = args.slice(1);
//   const funct = this; 
//   return function() {
//     const args2 = Array.from(arguments); 
//     const allArgs = other.concat(args2); 
//     return funct.apply(context, allArgs); 
//   }; 
// }

Function.prototype.myBind = function (...args) {
  const context = args[0];
  const other = args.slice(1);
  return (...args2) => {
    const allArgs = other.concat(args2);
    return this.apply(context, allArgs);
  };
}

function curriedSum(numArgs){
  const numbers = [];
  
  return function _curriedSum(num) {
    numbers.push(num); 
    if (numbers.length === numArgs) {
      let total = 0;
      for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      return total;
    } else {
      return _curriedSum; 
    }
  }
}

// Function.prototype.curry = function(numArgs) {
//   let args = []; 
//   const func = this; 

//   return function _curryFunc(arg) { 
//     args.push(arg); 

//     if (args.length === numArgs) { 
//       return func.apply(this, args); 
//     } else { 
//       return _curryFunc; 
//     } 
//   } 
// } 

// Version 1.0 
Function.prototype.curry = function (numArgs) {
  let args = [];
  const func = this;

  return function _curryFunc(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return func.apply(this, args);
    } else {
      return _curryFunc;
    }
  }
} 

// Version 1.1 
Function.prototype.curry = function (numArgs) {
  let args = [];
  // const func = this;

  const canYouNameThis = (arg) => {
    args.push(arg);

    if (args.length === numArgs) {
      return this(...args);
    } else {
      return canYouNameThis;
    }
  }
  return canYouNameThis;
} 
