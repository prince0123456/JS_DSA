const prompt = require('prompt-sync')();
let n1=prompt("enter vale 1 ");
let n2=prompt("enter 2n value ");
let n3=prompt("enter 3n value ");
if(n1>n2){
    console.log("n1 = "+n1);
}else if(n2>n1){
    console.log(n2);
}else{
    console.log(n3);
}
