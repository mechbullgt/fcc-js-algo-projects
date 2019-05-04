"use strict";

function convertToRoman(num) {
    let op;
    op = getRomanForNumeral(num);
    return op;
   }

   function getRomanForNumeral(num){
       let roman=[];
       let romanOp=[1000,900,500,400,100,90,50,40,10,9,5,4,3,2,1];
       let romanSet = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','III','II','I'];
       for(let x in romanOp){
           while(romanOp[x]<=num){
            roman.push(romanSet[x]);
            console.log('num from loop:', num);
            num -=romanOp[x];
           }
       }
       console.log('roman :', roman);
       let op = roman.join('');
       console.log('op :', op);
       return op;
   }
   
   convertToRoman(2014);