// First create an array of objects called data with the following values:
//Each individual object should have 'principal' and 'time' as keys.
let objArray = [
  {
    principal: 2500,
    time: 1.8,
  },

  {
    principal: 1000,
    time: 5,
  },

  {
    principal: 3000,
    time: 1,
  },
  {
    principal: 2000,
    time: 3,
  },
];

function interestCalculator(interestData) {
  for (i = 0; i < interestData.length; i++) {
    let principal = interestData[i].principal;
    let time = interestData[i].time;
    interestData[i].rate = 0;
    if (principal >= 2500 && time > 1 && time < 3) {
      interestData[i].rate = 3;
    } else if (principal >= 2500 && time >= 3) {
      interestData[i].rate = 4;
    } else if (principal < 2500 || time <= 1) {
      interestData[i].rate = 2;
    } else {
      interestData[i].rate = 1;
    }
    // Calculate the interest for each individual object using the formula: (principal * rate * time) / 100.
    interestData[i].interest =
      (interestData[i].principal *
        (interestData[i].rate * interestData[i].time)) /
      100;

    //   Log the 'interestData' array to console BEFORE your return statement.
    console.log(interestData[i]);
  }
  //  The function should return an array of objects called 'interestData' and each individual object should have
  // 'principal', 'rate', 'time' and 'interest' as keys with their corresponding values.
  return interestData;
}

// Finally, call/execute the function and pass the 'data' array you created.
interestCalculator(objArray);
