var arr = Array.from({length: 100_000}, (_, i) => i)

var fnFor = () => { // 970
  for (var i = 0; i < arr.length; i++) {

  }
}

var fnrForEach = () => { // 285
  arr.forEach(() => {})
}

var fnWhile = () => { // 1000
  var i = 0;

  while (i < arr.length) {
    i++;
  }
}

%NeverOptimizeFunction(fnFor);
%NeverOptimizeFunction(fnrForEach);
%NeverOptimizeFunction(fnWhile);

/** run */

var start = performance.now();

fnFor()

console.log('time: ', performance.now() - start);
