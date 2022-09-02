const encrypt = function (plaintext, key) {
  // IMPLEMENT ME
  let newWord = "";

  for (let i = 0; i < plaintext.length; i++) {
    let letterAsNum = plaintext.charCodeAt(i);
    let newCodeNum = letterAsNum + key;
    if (letterAsNum !== 32) {
      if (newCodeNum < 97) {
        newWord += String.fromCharCode(newCodeNum + 26);
      } else if (newCodeNum > 122) {
        newWord += String.fromCharCode(newCodeNum - 26);
      } else {
        newWord += String.fromCharCode(newCodeNum);
      }
    } else {
      newWord += plaintext[i];
    }
  }
  return newWord;
};

module.exports = { encrypt };
