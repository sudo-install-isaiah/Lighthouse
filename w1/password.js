function obfuscate(string) {
  let newPass = "";
  for (let letter of string) {
    switch (letter) {
      case "a":
        newPass += "4";
        break;
      case "e":
        newPass += "3";
        break;
      case "o":
        newPass += "0";
        break;
      case "l":
        newPass += "1";
        break;
      default:
        newPass += letter;
    }
  }
  return newPass;
}

const arg = process.argv;
const str = arg[2];

console.log(obfuscate(str));
