const prompt = require('prompt-sync')();
function swap(x,y){
    var t=x;
    x=y;
    y=t;
    console.log(x,y);
  }
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');
swap(a,b);