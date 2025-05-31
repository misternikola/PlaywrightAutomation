// converting Json to oter objects

let text = '{ "employees" : [' + 
'{ "firstName":"John" , "lastName":"Doe" },'+
'{ "firstName":"Anna" , "lastName":"Smith" },'+
'{ "firstName":"Peter" , "lastName":"Johnes" }]}';

let obj=JSON.parse(text);

console.log(obj.employees[1].firstName+" "+obj.employees[1].lastName);

data = '{"name":"mkyong","age": 30, "address":{"streetAddress":"88 street","city":"New york"}';