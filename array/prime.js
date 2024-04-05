const prompt=require("prompt-sync")();
let arr=[];
for(let i=0;i<100;i++){
    arr.push(i);
}
let re=[];
let flag=true;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        flag=false;
        continue;
    }
    if(flag){
        re.push(i);
    }
}

console.log(re);