class Student
{

    constructor(sid,sname,grade)
    {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }

    /*
    setDetails(sid,sname,grade)
    {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }

    display()
    {
        console.log(this.sid,this.sname,this.grade)
    }
        */
}

let stu=new Student(101,"john","A");    // with a constructor
//stu.setDetails(101,"John","A");   // with out a constructor
stu.display();

let stu1=new Student(102,"john","B");  
stu1.display();
let stu2=new Student(103,"wor","C"); 
stu2.display(); 
let stu4=new Student(104,"geek","D");  
stu4.display();