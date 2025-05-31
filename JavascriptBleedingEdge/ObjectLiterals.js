// 5. Object Literals
// literals - means that we dont need to write code duplicates

function addressMaker(city, state){
   // const newaddress = {newcity: city, newstate : state};
    const newaddress = {city, state};

    console.log(newaddress);    
}

addressMaker('Austin','Texas');