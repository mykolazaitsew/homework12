function task1(num) {
    return function(x) {
        if (x === undefined) {
            x = 1;
        }
        return x + num;
    }
}

const addNum = task1(5);
console.log(addNum(3));

function task2(startValue, step) {
    let coynt = startValue;
  function increment() {
    return (coynt += step);
  }
  function decrement() {
    return (coynt -= step);
  }
  function reset() {
    return (coynt = startValue);
  }

  return [increment,decrement,reset];
}

const [increment,decrement,reset] = task2(2,3);


console.log(increment()); 
console.log(increment()); 
console.log(decrement()); 
console.log(reset());
