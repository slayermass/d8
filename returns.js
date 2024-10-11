var fnThreeReturn = (v) => { // 2150
  if (v > 1) {
    return 2;
  }
  if (v > 2) {
    return 2;
  }
  return 3;
};

var fnTwoReturn = (v) => { // 1350
  if (v > 1) {
    return 2;
  }
  return 1;
};

var fnOneReturn = (v) => { // 1360
  return v > 1 ? 2 : 1;
};

%NeverOptimizeFunction(fnThreeReturn);
%NeverOptimizeFunction(fnTwoReturn);
%NeverOptimizeFunction(fnOneReturn);

/** run */

var start = performance.now();

for (var i = 0; i < 1_000_000; i++) {
  fnThreeReturn(i % 2 === 0 ? 2 : 1);
}

console.log('time: ', performance.now() - start);

