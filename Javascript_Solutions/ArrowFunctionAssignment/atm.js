const validateWithdrawal = (amount, balance) => {
  const transactionFee = 25;
  if (amount <= 0) {
    return { isValid: false, message: "Withdrawal amount must be greater than zero." };
  }
  if (amount % 500 !== 0) {
    return { isValid: false, message: "Withdrawal amount must be a multiple of 500." };
  }
  if (amount + transactionFee > balance) {
    return { isValid: false, message: "Insufficient balance for withdrawal and fee." };
  }
  return { isValid: true, message: "Withdrawal Successful!" };
};

const withdrawMoney = (amount, balance, validateCallback) => {
  const transactionFee = 25;
  const validation = validateCallback(amount, balance);

  console.log(`Account Balance: Rs. ${balance}`);
  console.log(`Withdrawal Amount: Rs. ${amount}`);

  if (!validation.isValid) {
    console.log(`Withdrawal Failed: ${validation.message}`);
    console.log(`Remaining Balance: Rs. ${balance}`);
    return balance;
  }

  const updatedBalance = balance - amount - transactionFee;
  console.log(`${validation.message} Transaction Fee: Rs. ${transactionFee}`);
  console.log(`Remaining Balance: Rs. ${updatedBalance}`);
  return updatedBalance;
};

withdrawMoney(3000, 10000, validateWithdrawal);