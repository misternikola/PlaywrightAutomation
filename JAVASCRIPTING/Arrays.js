let cars = new Array("bmw", "audio", "volvo")

console.log(cars)

console.log(cars[1])

cars[0]="Opel"
console.log(cars)

let mix = [100,"welcome",10.15,true]
console.log(mix);

let person1={
    name:"john",
    age:30
    };

let person2={
    name:"kid",
    age:23
}

let array1 = [person1,person2];
console.log(array1)

console.log(cars.length)

for(let i=0;i<cars.length;i++)
{
    console.log(cars[i])
}

for (ele of cars)     // it is like a for each statement
{
    console.log(ele)
}

console.log(typeof cars)

console.log(Array.isArray(cars))