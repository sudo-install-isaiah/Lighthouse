const args = process.argv;
let firstNum = args.slice(2)[0];
let secondNum = args.slice(2)[1];
console.log(Number(firstNum) + Number(secondNum));
