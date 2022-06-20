const sumAll = function(start, end) {
    let sum = 0;

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    if (!(start < 0) && !(end < 0) && (typeof start === 'number') && (typeof end === 'number')) {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
