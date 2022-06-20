const removeFromArray = function(...args) {
    // rest operator (using an array of all the arguments that are passed to a function)
    // first item in list of args is the array
    const array = args[0];
    const newArray = [];
    // push every element into the new array
    // UNLESS it is included in the function args (the elements that should be removed)
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
