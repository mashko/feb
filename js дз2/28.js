//1 2 3 5 8 13
let n=7;
result=2;
let i;
let array=[];
 array[0]=1;
 array[1]=2;
 console.log(n);
for ( i=2;i<n;i++){
    array[i]=array[i-1]+array[i-2];
}
console.log(array);