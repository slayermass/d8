// 3050-3300
var test1 = (v) => {
  return Boolean(v)
};

// 2000-2200
var test2 = (v) => {
  return !!v
};

var start = performance.now();

%NeverOptimizeFunction(test1);
%NeverOptimizeFunction(test2);

for (var i = 0; i < 50000; i++) {
  // test1(`${i}`);
  // test1(1);
  // test1({});
  // test1(new Date());

  test2(`${i}`);
  test2(1);
  test2({});
  test2(new Date());
}

console.log('time: ', performance.now() - start);
