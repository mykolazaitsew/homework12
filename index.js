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


