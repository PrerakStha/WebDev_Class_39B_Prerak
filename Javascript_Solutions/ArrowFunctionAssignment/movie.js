const getTicketPrice = (age) => {
  if (age < 12) return 150;
  if (age <= 17) return 200;
  if (age <= 59) return 300;
  return 200;
};

const calculateTotal = (price, quantity) => price * quantity;

const applyDiscount = (total, quantity) => {
  if (quantity >= 5) {
    return total * 0.1;
  }
  return 0;
};

const processBooking = (age, quantity) => {
  const unitPrice = getTicketPrice(age);
  const totalBeforeDiscount = calculateTotal(unitPrice, quantity);
  const discount = applyDiscount(totalBeforeDiscount, quantity);
  const finalAmount = totalBeforeDiscount - discount;

  return { totalBeforeDiscount, discount, finalAmount };
};

const bookTicket = (name, age, quantity, bookingCallback) => {
  const { totalBeforeDiscount, discount, finalAmount } = bookingCallback(age, quantity);

  console.log(`Customer: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Tickets: ${quantity}`);
  console.log(`Total Before Discount: Rs. ${totalBeforeDiscount}`);
  console.log(`Discount: Rs. ${discount}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

bookTicket("Hari", 25, 5, processBooking);