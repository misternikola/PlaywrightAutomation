class Animal{

    constructor(color){
        this.color=color;
    }

    printColor(){
        console.log(this.color);
    }
}

class Dog extends Animal{
    constructor(color,food){
        super(color);
        this.food=food;
    }
    eating(){
        console.log("Eating ",this.food);
    }
    display(){
        this.printColor();
        this.eating();
    }
}

d=new Dog("Black","Bread");
d.display();