const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  const answer = str.split("").map((el) => {
    if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
      return el.toLowerCase();
    } else if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
      return el.toUpperCase();
    } else return el;
  });
    
    console.log(answer.join(""))
});
