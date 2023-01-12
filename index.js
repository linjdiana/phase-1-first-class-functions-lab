// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2);
}



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];





const createFareMultiplier = () => {
    let value = 12.5
    const multi = () => {
        return(value * 2);
    }
        return multi;

}
createFareMultiplier();


const fareDoubler = () => {
    let fare = 10;
    return fare * 2;
}
fareDoubler();


const fareTripler = () => {
    let fare = 12;
    return fare * 3;
}
fareTripler();


function selectDifferentDrivers(array, func) {
return func(array);
};

selectDifferentDrivers(array, returnFirstTwoDrivers) 
