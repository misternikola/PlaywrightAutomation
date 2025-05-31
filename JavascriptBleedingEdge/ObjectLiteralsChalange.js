// 6. Object literals chalange


function addressMaker1(adress){

    const {city, state} = adress;
   
     const newaddress1 = {
        city, 
        state,
        country : 'United States'
    };

    console.log(`${newaddress1.city},${newaddress1.state},${newaddress1.country}`)      
 }
 
 addressMaker1({city:'Austin', state:'Texas'});
