let s="welcome";

console.log(s.charAt(2));

console.log(s.concat("to javascript").concat("programing"));

let a = "welcome to javascript";
console.log(a.replace("javascript","java"));

let b = "welcome";
console.log(b.substring(0,3));
console.log(b.substring(3,7));

let c = "WElcome";
console.log(c.toLowerCase());
console.log(c.toUpperCase());

c = "welcome to javascript";

let arr = c.split();

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

c = " welcome ";
console.log(c.trim());

//Numbers

let x=100;

let xx = 102;
let y = 102.7;
let z = 10e2;

console.log(xx, y, z);

console.log(Number.isInteger(xx));

let e ="12345";

console.log(typeof(Number.parseInt(e)));

let f = "123.567";
console.log(typeof(Number.parseFloat(f)));
