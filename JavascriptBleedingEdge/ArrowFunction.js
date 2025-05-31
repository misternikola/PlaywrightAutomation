// 11. Arrow functions - we use it to avoid the word function by adding the arrow

 function add1(...num2){
   let total = num2.reduce((x, y) => x+y
   )
   console.log(total);
 }

 add1(4,5,7,8,12);