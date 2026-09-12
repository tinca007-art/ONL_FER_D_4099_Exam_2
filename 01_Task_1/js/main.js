const data = [1, 2, 3, 4, 5];

function without(data, ...num) {
    return data.filter(number => !num.includes(number));
}

console.log(without(data, 1, 2)); // [3, 4, 5];
console.log(without(data, 5, 3)); // [1, 2, 4];
console.log(without(data, 1, 2, 3, 4)); // [5];
console.log(without(data)); // [1, 2, 3, 4, 5];
console.log(without(data, 1, 2, 3, 4, 5)); // [];
