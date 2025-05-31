class Test
{
    static a=10;
    b=20;


static m1(){
    console.log("Static method")
}

m2(){
    console.log("non static method")
}

}

console.log(Test.a);     // ovako se koriste static variable pozivas klasu pa preko nje variablu
Test.m1();               // ovako pristupamo static metodama

console.log(Test.a);
Test.a=1000;
console.log(Test.a);      //ovako je promenjena vrednost van klase

let t=new Test();
console.log(t.b);
t.m2();     //sada mogu da ima pristupim ne staticnim stvarima