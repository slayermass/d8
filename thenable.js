var thenable1 = {
  then: () => 1,
}

var thenable2 = Promise.resolve(1);

var fn1 = () => { // 160
  return thenable1.then()
}

var fn2 = () => { // 350
  return thenable2.then()
}

%NeverOptimizeFunction(fn1);
%NeverOptimizeFunction(fn2);

/** run */

var start = performance.now();

for (var i = 0; i < 10_000; i++) {
  // fn1();
  // fn2();
}

console.log('time: ', performance.now() - start);
