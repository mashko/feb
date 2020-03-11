let x=(Math.floor(Math.random() * (1000000-100000))+100000);// (max-min)+min
console.log(x);
let sum=0;
let pro=1;
while(x>0){
sum=sum+x%10;
pro=pro*(x%10);
x=Math.floor(x/10);
}
console.log(sum);
console.log(pro);