var thenable = {
  then: () => 1,
}

// async uses generator*
var fnAsync = async () => { // 300
  return thenable.then();
}

var fnPromise = () => { // 155
  return thenable.then()
}

%NeverOptimizeFunction(fnAsync);
%NeverOptimizeFunction(fnPromise);

/** run */

var start = performance.now();

for (var i = 0; i < 10_000; i++) {
  // fnAsync();
  // fnPromise();
}

console.log('time: ', performance.now() - start);

