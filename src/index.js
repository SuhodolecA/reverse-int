module.exports = function reverse (n) {
    const ABSOLUTE_VALUE = Math.abs(n);
  return ABSOLUTE_VALUE.toString().split('').reverse().join('');
}
