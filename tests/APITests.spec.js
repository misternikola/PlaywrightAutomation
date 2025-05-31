   const{test,expect} =  require('@playwright/test')

   var Userid;

   test("Get user", async({request}) => {
   const response = await request.get('https://reqres.in/api/users?page=2');
   console.log(await response.json());
  expect(response.status()).toBe(200);
   })

   test("Create user", async({request}) => {
      const response= await request.post('https://reqres.in/api/users', {
                data :{
                    "name":"john",
                    "job":"chachkolj"
                },
                headers:{
                   "x-api-key": "reqres-free-v1",
                    "Content-Type":"application/json"
                }
            });
    console.log(await response.json());
    expect(response.status()).toBe(201);

    var res = await response.json();
    Userid=res.id
   })

   test("Update user", async({request}) => {

     const response= await request.put('https://reqres.in/api/users/'+Userid, {
                data :{
                    "name":"john",
                    "job":"zamajeni"
                },
                headers:{
                     "x-api-key": "reqres-free-v1",
                    "Content-Type":"application/json"
                }
            });
    console.log(await response.json());
    expect(response.status()).toBe(200);

   
   })

   test("Delete user", async({request}) => {
     const response= await request.delete('https://reqres.in/api/users/'+Userid);
     console.log("Delete status is "+response.status());
    expect(response.status()).toBe(401);
   })