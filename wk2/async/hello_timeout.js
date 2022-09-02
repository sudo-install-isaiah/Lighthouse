let str = "Hello There World";

let timer = 1000;

for (let ele of str.split(" ")) {
  setTimeout(() => {
    console.log(ele);
  }, timer);
  timer += 1000;
}
