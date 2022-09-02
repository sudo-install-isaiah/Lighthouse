const arg = process.argv;
const userInput = arg.slice(2);

const pigLatin = function(text) {
  let newStr = "";
  for (let i = 0; i < text.length; i++) {
    for (let k = 1; k < text[i].length; k++) {
      newStr += text[i][k];
      if (k === text[i].length - 1) {
        newStr += text[i][0] + "ay ";
      }
    }
  }
  return newStr;
};

console.log(pigLatin(userInput));
