const data = [1, 2, 3, 4, 5];

function without(data, ...num) {
    return data.filter(item => !num.includes(item));
}

console.log(without(data, 1, 2)); // [3, 4, 5];
console.log(without(data, 5, 3)); // [1, 2, 4];
console.log(without(data, 1, 2, 3, 4)); // [5];
console.log(without(data)); // [1, 2, 3, 4, 5];
console.log(without(data, 1, 2, 3, 4, 5)); // [];


/**
 * Write your code below!
 */