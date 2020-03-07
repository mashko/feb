let a=1; // вводим коэффициенты
let b=-4; // вводим коэффициенты
let c=4; // вводим коэффициенты
let x1;
let x2;
let D;
D= b*b -4*a*c;
if (D<0){
    console.log ("нет решений");
}
if (D==0) { 
    x1=-b/(2*a);
    console.log(x1);
}
if (D>0){
    x1= (-b+Math.sqrt(D))/(2*a);
    x2= (-b-Math.sqrt(D))/(2*a);
    console.log(x1);
    console.log(x2);
}