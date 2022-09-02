const arg = process.argv;
let newArg = arg.slice(2);
const revString = function(array) {
  let newStr = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = array[i].length - 1; j >= 0; j--) {
      newStr += array[i][j];
    }
    if (i < array.length - 1) {
      newStr += "\n";
    }
  }
  return newStr;
};

console.log(revString(newArg));
