const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1.concat(a2, [7, 8, 9], 'Pedro');
const a3 = [...a1, 'Pedro', ...a2, ...[7, 8, 9]];
// ... rest -> ... spread
console.log(a3);