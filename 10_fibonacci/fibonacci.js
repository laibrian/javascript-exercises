const fibonacci = function(member) {
    
    if (member < 0) {
        return "OOPS"; // no negatives
    }   

    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    for (let i = 1; i <= member; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
