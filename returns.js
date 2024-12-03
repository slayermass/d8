var fnManyReturns = (v) => { // 3000
  if (v > 1) {
    return 2;
  } else if (v > 2) {
    return 2;
  } else if (v > 3) {
    return 3;
  } else if (v > 4) {
    return 4;
  }
  return 5;
};

var fnSwitchReturns = (v) => { // 1380
  switch (v) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    default:
      return 5
  }
};

var fnOneReturn = (v) => { // 1380
  return v > 1 ? 2 : 1;
};

var fnArrReturn = (v) => { // 12500
  var arr = [1,2,3,4,5];

  return arr[v]
};


%NeverOptimizeFunction(fnManyReturns);
%NeverOptimizeFunction(fnOneReturn);
%NeverOptimizeFunction(fnArrReturn);
%NeverOptimizeFunction(fnSwitchReturns);

/** run */

var start = performance.now();

for (var i = 0; i < 1_000_000; i++) {
  fnArrReturn(i % 2 === 0 ? 2 : 1);
}

console.log('time: ', performance.now() - start);
