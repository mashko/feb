//y = -0.23x2 + x.
let x, xmin=0,xmax=10,step=2;
let array = [];
let k=0;
let y;
let arr2=[];
let t=0;
for (let i=xmin;i < xmax; i=i+step)
{array[k]=i;
k++;
}
console.log(array);
for(i=xmin;i<xmax;i=i+step){
y= -0.23*i*i+i;
arr2[t]=y;
t++;
}
console.log(arr2);