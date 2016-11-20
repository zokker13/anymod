function math_mod(number, operand) {

  if (operand === 0) {
    return undefined;
  }

  return (number - (Math.floor(number / operand) * operand));
}

function mod(number, operand) {

  return math_mod(number, operand);
}

module.exports = mod;
