let percent=0;
let count=0;
for(i=0;i<10001;i++){
    let x=(Math.floor(Math.random() * 10000));
    count++; 
    if(x%2==0){
        percent++;
       
    }
}
console.log(Math.floor((percent/count*100)) + '%' );



