const calculateBonus = (amount) => {
  let bonusRate = 0;
  if (amount >= 1000) {
    bonusRate = 0.15;
  } else if (amount >= 500) {
    bonusRate = 0.1;
  } else if (amount >= 100) {
    bonusRate = 0.05;
  }
  return amount * bonusRate;
};

const calculateTotalBalance = (amount, bonus) => amount + bonus;

const recharge = (number, amount, totalBalanceCallback) => {
  const bonus = calculateBonus(amount);
  const totalBalance = totalBalanceCallback(amount, bonus);

  console.log(`Mobile Number: ${number}`);
  console.log(`Recharge Amount: Rs. ${amount}`);
  console.log(`Bonus Received: Rs. ${bonus}`);
  console.log(`Total Balance: Rs. ${totalBalance}`);
};

recharge("9800000000", 1000, calculateTotalBalance);