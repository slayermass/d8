var str = 's'.repeat(500);

var fnDestruct = (str) => { // 685
  var [f, s] = str;

  return `${f}${s}`;
};

var fnObj = (str) => { // 275
  var { 0: f, 1: s } = str;

  return `${f}${s}`;
};

var fnNum = (str) => { // 285
  return `${str[0]}${str[1]}`;
};

%NeverOptimizeFunction(fnDestruct);
%NeverOptimizeFunction(fnObj);
%NeverOptimizeFunction(fnNum);

/** run */

var start = performance.now();

for (var i = 0; i < 10000; i++) {
  fnNum(str);
}

console.log('time: ', performance.now() - start);
