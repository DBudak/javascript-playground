const Money = (currency, amount) => 
  Object.seal(Object.freeze(
    Object.assign(
      Object.create(null), // like {} but no Object.prototype inheritance
      {
        amount,
        currency,
        equals: value => currency === value.currency && amount === value.amount,
        round: (precision=2) => Money(currency, precisionRound(amount, precision)),
        subtract: value => Money(currency, amount - value),
        add: value => Money(currency, amount + value),
        multiply: value => Money(currency, amount * value),
        compare: value => amount - value.amount,
        makeNegative: _ => Money(currency, amount * -1),
        valueOf: _ => precisionRound(amount, 2),
        toString: _ => `${currency}${amount}`,
        zeroify: _ => Money(currency, 0)
      } 
    )
  ));

  //static methods
  Money.sum = (m1,m2) => m1.add(m2);
  const precisionRound = (number, precision) => Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);

const fee = Money('$', 100);
console.log(fee.amount, fee.currency); // 100 $
console.log(fee.toString()); //$100
console.log(fee * 3); //300
console.log(fee + fee); //200
console.log(Object.isFrozen(fee)) // true
console.log(Object.isSealed(fee))
// fee.amount = 55 // Error because of freeze
// fee.bankrupt = true // Error because of seal