const R = require('ramda');

// 1 - find last item in list
(function(){
  const l = [2, 4, 6];
  const x = R.last(l);
  console.log('1:', x);
})();

// 2 - find second to last item in list
(function(){
  const l1 = [2, 4, 6];
  const l2 = R.takeLast(2, l1);
  const x = R.head(l2);
  console.log('2:', x);
})();

// 3 - find the nth item in list - starting at 1
(function(){
  const l = [2, 4, 6, 8, 10];
  const v = R.dec(4);
  const x = R.nth(v, l);
  console.log('3:', x);
})();
