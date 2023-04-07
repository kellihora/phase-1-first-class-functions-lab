// Code your solution in this file!
const returnFirstTwoDrivers = function(myArray){
   return myArray.slice(0,2); 
}

const returnLastTwoDrivers = function(myArray){
    return myArray.slice(-2, myArray.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier};
}

const fareDoubler = function (fare){
    return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(myArray, fnctn){
    return fnctn(myArray);
}
