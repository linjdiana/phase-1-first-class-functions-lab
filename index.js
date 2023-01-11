// Code your solution in this file!

// function returnFirstTwoDrivers() {
//   return;
// }
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = () => {
  return drivers.splice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(2);
};
