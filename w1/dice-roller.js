function rollNum(rolls) {
  let result = [];
  while (rolls > 0) {
    result.push(Math.ceil(Math.random() * 6));
    rolls--;
  }
  return result;
}

function printDiceResults(array) {
  let newStr = array.join(", ");
  console.log(`Rolled ${array.length} dice: ${newStr}`);
}

const arg = process.argv;
const userInput = Number(arg[2]);
printDiceResults(rollNum(userInput));
