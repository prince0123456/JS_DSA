// const prompt = require("prompt-sync")();
// let len=prompt("enter array length");
// let arry=[];

// let m=-Infinity;
// for(let i=0;i<len;i++){
//     let input=prompt("enter value = ");
//     arry.push(input); 
// }
// for(let num of arry){
//     if(m<num){
//         m=num;
//        // console.log(m);
//     }
// }
// console.log("display = "+arry);
// console.log(m);
var removeDuplicates = function(nums) {
    let n=nums.length;
    let k=new Array(n);
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length-1;i++){
            if(nums[j]==nums[i+1]){
                k.push('_');
            }
        }
        console.log(i);
    }
   // return k;
};
let ar=[0,1,1,1,1,2,2,2,3,3,5,6,9];
removeDuplicates(ar);