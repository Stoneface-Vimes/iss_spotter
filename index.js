const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log(("It didn't work!", error));
  }
  printPassTimes(passTimes);
  
});


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);

// });


// fetchCoordsByIP('66.207.199.230', (error, geo) => {

//   if (error) {
//     console.log("It didn't work!", error);
//     return;

//   }
//   console.log('It worked! returned coords: ', geo);
// });

// fetchISSFlyOverTimes({ latitude: 43.6383, longitude: -79.4301 }, (error, times) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;

//   }
//   console.log('It worked! Returned flyover times: ', times);
// });