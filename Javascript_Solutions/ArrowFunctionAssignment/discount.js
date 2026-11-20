const calculateDiscount = (amount) => {
  if (amount >= 5000) return 20;
  if (amount >= 3000) return 15;
  if (amount >= 1000) return 10;
  return 0;
};

const calculateFinalPrice = (amount, discountPercent) => {
  const discountAmount = (amount * discountPercent) / 100;
  return amount - discountAmount;
};

const checkout = (customerName, amount, priceCalculatorCallback) => {
  const discountPercent = calculateDiscount(amount);
  const finalPrice = priceCalculatorCallback(amount, discountPercent);

  console.log(`Customer: ${customerName}`);
  console.log(`Original Price: Rs. ${amount}`);
  console.log(`Discount: ${discountPercent}%`);
  console.log(`Final Price: Rs. ${finalPrice}`);
};

checkout("Nikesh", 6000, calculateFinalPrice);