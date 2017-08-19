
const TEO_SUU = "TEISUU";
var a = 1;
let b = 2;

if(a == 1){
  var a = 10;
  let b = 20;
}
console.log(a, b);

let [c, d] = [1, 2];


let func = () => {
  console.log(a, b, c, d);
}

func();

var num = 1;
let moji = `数は${num}です。`;

console.log(moji);