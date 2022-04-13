const ARR = [10, 15, 18, 24, 38]
const K = 22;

const bestMatch = ARR.reduce(function(prev, curr) {
    return (Math.abs(curr - K) < Math.abs(prev - K) ? curr : prev);
});

console.log(bestMatch);
