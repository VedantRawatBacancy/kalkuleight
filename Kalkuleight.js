function kalkuleight(principal, rate, time, frequency) {
  rate = rate / 100;

  const amount = principal * Math.pow(1 + rate / frequency, frequency * time);

  return {
    amount: amount.toFixed(2),
  };
}

module.exports = { kalkuleight };