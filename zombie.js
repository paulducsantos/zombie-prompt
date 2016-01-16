var prompt = require('prompt');

prompt.start();

var userHP = 5;
// var userFood = 50;
// var userAxeDamage = 4;
// var userFifthSense = 0;
var day = 0;

var zombieHP = 5;
// var zombieDamage = 5;

var input;

// while (userHP > 0) {
  prompt.get(["guessNumber"], function(err, result) {
    if(err) {
      throw err;
    }

    var userNumber = result.guessNumber;

    var randNum = Math.floor(Math.random() * 10) + 1;
    console.log(randNum);

    if (userNumber === randNum) {
      //user attacks zombie
      zombieHP = zombieHP - (Math.floor(Math.random() * (5-3)) + 2);
      console.log(zombieHP);
      console.log("zombie");
    } else {
      //zombie attacks user
      userHP = userHP - (Math.floor(Math.random() * (5-3)) + 2);
      console.log(userHP);
      console.log("user");
    }

    day++;
  });
// }



