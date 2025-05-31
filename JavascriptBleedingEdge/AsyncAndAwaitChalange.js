 // 21  Async and await chalange

 function resolveafter3seconds(){
     return new Promise(resolve => {
         setTimeout(() => {
             resolve('resolved');
         }, 3000);
     });
 }

 resolveafter3seconds().then((data2) => {
     console.log(data2);
 })

 async function getAsyncData(){
    const result = await resolveafter3seconds();
    console.log(result);
 }

 getAsyncData();