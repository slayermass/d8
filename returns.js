var fnTwoReturn = (v) => { // 1330
  if (v > 1) {
    return 2;
  }
  return 1;
};

var fnOneReturn = (v) => { // 1300
  var res = v > 1 ? 2 : 1
  return res;
};

%NeverOptimizeFunction(fnTwoReturn);
%NeverOptimizeFunction(fnOneReturn);

/** run */

var start = performance.now();

for (var i = 0; i < 1000000; i++) {
  fnOneReturn(1);
}

console.log('time: ', performance.now() - start);

