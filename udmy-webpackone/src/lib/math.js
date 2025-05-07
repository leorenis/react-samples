const math = require('mathjs');

function sum(a, b) {
  return a + b;
}

function evaluate(expression) {
  return math.evaluate(expression);
}

module.exports = {
  sum,
  evaluate,
}