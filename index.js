// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return street > 42 ?  street - 42 : 42 - street;

    //returns the number of blocks given a value
  }
  function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street)*264;
  }
  function distanceTravelledInFeet(start, end) {
    return end > start? (end - start) * 264 : (start - end) * 264;

  }
  function calculatesFarePrice(start, end) {
    //returns the fare for the customer
  
    if (distanceTravelledInFeet(start, end) <= 400) {
        return 0;
    } 
    else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) <= 2000) {
        return .02 * (distanceTravelledInFeet(start, end) - 400);
    }
    else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) <= 2500) {
        return 25;

    }
    else if (distanceTravelledInFeet(start, end) > 2500) {
        return "cannot travel that far";
    }
  
}