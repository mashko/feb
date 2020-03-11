 let i;
 let left=0;
 let right=1;
 for(    i=0;i<=1000;i++) {
left=left+i;
right=i*(i+1)/2;
 
if(left!=right){
    console.log(left+' не равно '+ right);
    console.log('чета неверна');
}
}
 