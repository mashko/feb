 let r=Math.floor(Math.random() * 11); 
 let x=Math.floor(Math.random() * 16); 
 let y=Math.floor(Math.random() * 16); 
 if (x*x+y*y<=r*r){
     console.log("принадлежит");
 }
 else{
    console.log("не принадлежит");
 }
