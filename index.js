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

function task3(...fns) {
    return function(initialValue) {
        function applyFn(index, value) {
            if (index >= fns.length) {
                return value;
            }
            return applyFn(index + 1, fns[index](value));
        }
        return applyFn(0, initialValue);
    };
}

// const add2 = x => x + 2;
// const multiply3 = x => x * 3;
// const decrement1 = x => x - 1;

// const sequence = task3(add2, multiply3, decrement1);

// console.log(sequence(7));
// console.log(sequence(10));


function task3rework(...fns) {
  return function(initialValue) {
    let result = initialValue;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}

const add2 = x => x + 2;
const multiply3 = x => x * 3;
const decrement1 = x => x - 1;

const sequentialFunction = task3rework(add2, multiply3, decrement1);

console.log(sequentialFunction(2));

 

