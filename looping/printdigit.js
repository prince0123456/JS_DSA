// function printD(n) {
//     let a=new Array();
//     while(n){
//         console.log(n%10);
//         n=Math.floor(n/10);
//     }
// }
function printD(n) {
    let a=new Array();
    while(n){
        let num=(n%10);
        a.push(num);
        n=Math.floor(n/10);
    }
    console.log(a);
}
printD(456);