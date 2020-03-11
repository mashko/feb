let array=[];
counter=0;
let max=0;
let min=101;
let sum1=0;
let sum2=0;
for (let i=0;i<10;i++){
array[i]=Math.floor(Math.random() * (101));
sum1=sum1+array[i];
 if(array[i]>max){
     max=array[i];
 }
 if(array[i]<min){
     min=array[i];
 }}
 sum1=sum1-max-min;
   
     console.log(array);
     console.log(min,max);
     console.log(sum1);
     