function fibs(n) {
    // Starting terms for fibonacci sequence
    // https://en.wikipedia.org/wiki/Fibonacci_sequence
    const sequence = [0, 1];

    if (n <= 2) {
        return sequence.slice(0, n);
    }

    for (let i = 2; i < n; i++) {
        // Create the next term in the sequence by
        // adding the previous two terms together
        const lastTerm = sequence[i - 1];
        const secondToLastTerm = sequence[i - 2];
        sequence.push(lastTerm + secondToLastTerm);
    }

    return sequence;
}

function fibsRec(n) {
    if (n === 1) return [0];
    const term = getFibTerm(n);
    return fibsRec(n - 1).concat([term]);
}

function getFibTerm(n) {
    // Recursive definition of fibonacci sequence:
    // https://www.youtube.com/watch?v=zg-ddPbzcKM
    if (n === 1) return 0; // First fibonacci term is 0 by definition
    if (n === 2) return 1; // Second fibonacci term is 1 by definition
    else return getFibTerm(n - 1) + getFibTerm(n - 2);
}
