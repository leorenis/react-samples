const math = require('./lib/math.js');
console.log(`A soma: ${math.sum(3, 5)}`);

const expression = 'sqrt(4^2 + 3^2)';
const expressionResult = math.evaluate(expression);
console.log(`${expression}: ${expressionResult}`);