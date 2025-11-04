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
