module.exports = function multiply(first, second) {

  numberOne = first;
  numberTwo = second; 

  asnwer = BigInt(numberOne)*BigInt(numberTwo);

  return String(asnwer);
}
