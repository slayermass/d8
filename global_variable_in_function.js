var fnValueAsParam = () => { // 510
  var counter = 0;

  var fn = (localCounter) => {
    while (localCounter < 9e8) {
      localCounter++;
    }

    counter = localCounter; // to update the variable if needed
  }

  fn(counter);

  console.log('counter', counter);
}

var fnValueFromContext = () => { // 1600
  var counter = 0;

  var fn = () => {
    while (counter < 9e8) {
      counter++;
    }
  }

  fn();

  console.log('counter', counter);
}

%NeverOptimizeFunction(fnValueFromContext);
%NeverOptimizeFunction(fnValueAsParam);

/** run */

var start = performance.now();

// fnValueAsParam();
// fnValueFromContext();

console.log('time: ', performance.now() - start);
