let a=Math.floor(Math.random() * 11); 
let b=Math.floor(Math.random() * 11); 
let c=Math.floor(Math.random() * 11); 
let max;
if (a* b* c > a+b+c){
    max= a*b*c+3;
}
else {
    max=a+b+c+3;
}
console.log(max)