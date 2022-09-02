const raisinAlarm = function(cookie) {
  // Put your solution here
  // loop through array
  //look for raisin
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin alert";
    }
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  // for loop to go over the array
  // check array within array for raisin
  // return an array of responses
  let result = [];
  for (let i = 0; i < cookies.length; i++) {
    let counter = 0;
    // let str = "All good";
    for (let j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === "🍇") {
        counter++;
        // str = "Raisin alert";
      }
    }
    counter > 0 ? result.push("Raisin alert") : result.push("All good");
    // result.push(str)
  }
  return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

