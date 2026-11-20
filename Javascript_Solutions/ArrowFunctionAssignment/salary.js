const calculateBonus = (salary) => {
  const bonusRate = salary >= 40000 ? 0.1 : 0.05;
  return salary * bonusRate;
};

const calculateTax = (salary) => salary * 0.05;

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
  const bonus = bonusCallback(salary);
  const tax = taxCallback(salary);
  return salary + bonus - tax;
};

const generatePayslip = (name, salary, netSalaryCallback) => {
  const bonus = calculateBonus(salary);
  const tax = calculateTax(salary);
  const netSalary = netSalaryCallback(salary, calculateBonus, calculateTax);

  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${bonus}`);
  console.log(`Tax: Rs. ${tax}`);
  console.log(`Net Salary: Rs. ${netSalary}`);
};

generatePayslip("Ram", 50000, calculateNetSalary);