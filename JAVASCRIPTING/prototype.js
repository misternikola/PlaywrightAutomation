function student(){
    this.name="John";
    this.gender="male";
}

student.prototype.age = 35;   // with this prototype we are adding other values that are not previously added



stu1=new student();
console.log(stu1.name);
console.log(stu1.gender);

stu1=new student();
//stu1.age=35;

console.log(stu1.name, stu1.gender, stu1.age);

stu2=new student();

console.log(stu2.name, stu2.gender, stu2.age); //now the age will be visible for this situation 

