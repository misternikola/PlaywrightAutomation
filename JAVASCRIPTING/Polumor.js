class Shape{
    draw(){
        return "i am a generic shape"
    }
}

class Square extends Shape{
    draw(){
        return "i am a square"
    }
}

class Circle extends Shape{
    draw(){
        return "i am a circle"
    }
}



let s = new Shape();
console.log(s.draw()); 

let a = new Square();
console.log(a.draw()); 

let b = new Circle();
console.log(b.draw()); 
