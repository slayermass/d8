const fnCorrect = () => {
  let counter = 0;

  const fn = (localCounter) => {
    while (localCounter < 9e8) {
      localCounter++;
    }

    counter = localCounter;
  }

  fn(counter);

  console.log('counter', counter);
}

const fnContext = () => {
  let counter = 0;

  const fn = () => {
    while (counter < 9e8) {
      counter++;
    }
  }

  fn();

  console.log('counter', counter);
}

%NeverOptimizeFunction(fnContext);
%NeverOptimizeFunction(fnCorrect);

/** run */

var start = performance.now();

fnContext();

console.log('time: ', performance.now() - start);
