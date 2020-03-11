let array=[];
counter=0;
for (let i=0;i<10;i++){
array[i]=Math.floor(Math.random() * (101));
counter= counter+array[i];
}
console.log(array);
console.log(counter);
let sr=counter/array.length;
for (let i=0;i<10;i++){
if(array[i]<sr){
    console.log(array[i]);
}
}