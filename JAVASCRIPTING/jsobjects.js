let person=
{
    firstname:"john",
    lastname:"kenedy",
    age:50,
    weight:60,
    bonus: function()
         {
            return((this.age) * 10)
         }
}

console.log(person.bonus())  //we call the method this way

console.log(person["firstname"])

person["height"]=5.5  // adding new property
console.log(person[height])

// delete person["age"]
console.log(person[age])

console.log("looping objects")

for(let x in person)
{
    console.log(x);
}

console.log("lloping objects again")
for(let x in person)
{
    console.log(person[x])  // only property values
}

console.log("looping object yet again")
for(let x in person)
{
    console.log(x+" "+person[x]) // properties and property values
}