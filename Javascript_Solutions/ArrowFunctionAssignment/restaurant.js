const getFoodPrice = (foodName) => {
  const menu = {
    burger: 250,
    pizza: 500,
    momo: 180,
    chowmein: 150,
  };
  const price = menu[foodName.trim().toLowerCase()];
  return price ?? null;
};

const calculateServiceCharge = (total) => total * 0.05;

const calculateOrder = (foodName, quantity, priceCallback) => {
  const unitPrice = priceCallback(foodName);
  if (unitPrice === null || quantity <= 0) {
    return null;
  }
  return unitPrice * quantity;
};

const generateReceipt = (customerName, foodName, quantity, orderCallback) => {
  const foodAmount = orderCallback(foodName, quantity, getFoodPrice);

  if (foodAmount === null) {
    console.log(`Customer: ${customerName}`);
    console.log(`Invalid food item ("${foodName}") or quantity.`);
    return;
  }

  const serviceCharge = calculateServiceCharge(foodAmount);
  const finalAmount = foodAmount + serviceCharge;

  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);