// 12. Default params

 function add2(numArray = []){
    let total =0;
    numArray.forEach(element => {
        total =+ element;
    });  

    console.log(total);
 }

 add2();