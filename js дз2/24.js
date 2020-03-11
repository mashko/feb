let x=(Math.floor(Math.random() * (1000 - 100 ))+100 );
console.log(x);
let result=0;
let counter=0;
let k;
let a=x;
 
while(a>0){
    counter++;
    a=Math.floor(a/10);
}
counter++;
while(x>0){
    k=x%10;
    result=result + k *(10 ** (counter-2));
    counter--;
    x=Math.floor(x/10);
    //console.log(counter);
    //console.log(x);
}

console.log(result);