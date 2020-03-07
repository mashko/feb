let a=Math.floor(Math.random() * 101); 
let b=Math.floor(Math.random() * 101); 
if (a%b==0){
console.log("делится без остатка");
console.log("частное "+a/b);}
else{
    console.log("делится с остатком");
    console.log("частное "+(a/b));
    console.log("остаток "+a%b);

}
 