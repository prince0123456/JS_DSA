const prompt=require("prompt-sync")();
let addArr=[];
let userinput=prompt("enter size of array");
for(let i=0;i<userinput.length;i++){
    let input = prompt("enter value -- "+i+1+": ");
    addArr.push(input);
}
addArr();