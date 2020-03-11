let array=[1,2,3,4,5,6];
let l=Math.floor(array.length/2);
let arr=[];
let i;
if(array.length%2==0){//четное кол-во элементов массива
    for(i=0;i<array.length/2;i++){
    arr[i]=array[i+l];}
    for(i=array.length/2;i<array.length;i++){
        arr[i]=array[i-l];
    }}
else{// нечетное количество элементов массива
    for(i=0;i<l;i++){
        arr[l]=array[l];
        arr[i]=array[i+l+1];
    }
    for(i=Math.ceil(array.length/2);i<array.length;i++){
        arr[i]=array[i-l-1];
    } 

}
console.log(array);
console.log(arr);