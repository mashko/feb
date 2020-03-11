let x=(Math.floor(Math.random() * 101));
let i;
for(i=0;i<10;i++){
    var y = prompt("Угадайте число: ");
    if (y==x){ 
        alert('Угадал');
         break;
    }
     if (y<x){
         alert('Надо больше (' + (9-i)+ ' попыток)');}
    if (y>x){
        alert('Надо меньше ('+ (9-i)+ ' попыток)');
    }
     }
console.log(x);