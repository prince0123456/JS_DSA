const prompt = require("prompt-sync")();
let len=prompt("enter array length");
let arry=[];


for(let i=0;i<len;i++){
    let input=prompt("enter value = ");
    arry.push(input);
}
console.log("display = "+arry);