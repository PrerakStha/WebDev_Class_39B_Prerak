const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

const getDivision = (average) => {
  if (average >= 70) return "First Division";
  if (average >= 60) return "Second Division";
  if (average >= 50) return "Third Division";
  return "Fail";
};

const processResult = (name, m1, m2, m3, divisionCallback) => {
  const average = calculateAverage(m1, m2, m3);
  const division = divisionCallback(average);

  console.log(`Student: ${name}`);
  console.log(`Average: ${average}`);
  console.log(`Division: ${division}`);
};

processResult("Sita", 75, 80, 70, getDivision);