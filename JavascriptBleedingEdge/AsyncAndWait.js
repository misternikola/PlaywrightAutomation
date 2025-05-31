 // 20. Async and Await

 const apiURL = 'https://api.thecatapi.com/v1/images/search?limit=10';

 function getcat(){
     fetch(apiURL)
     .then((r) => r.json())
     .then((json) => {
         console.log(json[0])
     }).catch((error) => {
            console.log('failed');
     });
 }

 getcat();

 const apiURL1 = 'https://dog.ceo/api/breeds/image/random';

 async function getpic(){
     const response = await fetch(apiURL1);
     const json = await response.json();
     console.log(json);
 }

 getpic();