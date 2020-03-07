let n=20000;
let y=2;
let p=15;
let m;
let s;
m = (n * p/100 * (1 + p/100)*y) / (12 * ( (1 + p/100)*y -1));
s = (m * 12) * y;
console.log(m);
console.log(s);
