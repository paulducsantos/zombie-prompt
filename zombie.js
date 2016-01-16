var prompt = require('prompt');

prompt.start();

var userHP = 100;
// var userFood = 50;
// var userAxeDamage = 4;
// var userFifthSense = 0;
var day = 0;

var zombieHP = 20;
// var zombieDamage = 5;

var input;

prompt.get(["RestOrScavange"], function(err, result) {
  if(err) {
    throw err;
  }

  input = result.RestOrScavange;
  switch (input) {
    case "rest":
      day +=1;
      console.log(day);
      break;

    default:
      console.log("error");
  }
});




if (userFifthSense < 5) {
  //1% chance to find food
  //1% chance to find gun
} 
  else if (userFifthSense >= 5 && userFifthSense <= 7) {
    //5% chance to find food
    //5% chance to find gun
  } else if (userFifthSense >= 7 && userFifthSense < 10) {
      //7% chance to find food
      //7% chance to find gun
    } else if (userFifthSense === 10) {
        //10% chance to find food
        //10% chance to find gun
      }


