class Employee{

    constructor(eid,name){
        this.eid=eid;
        this.name=name;
    }
}

Employee.prototype.sal=50000;

Employee.prototype.display=function(){
    console.log(this.eid,this.name,this.sal);
}

emplobj=new Employee(101,"David");

console.log(emplobj.eid, emplobj.name, emplobj.sal)

emplobj.display();

