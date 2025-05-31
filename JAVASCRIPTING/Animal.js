export class Animal {
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }

    makenoise(sound = 'Loud noise'){
        console.log(sound);
    }

    static return10(){
        return 10;
    }

    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
}

export class Cat extends Animal {
    constructor(type,legs,tail){
        super(type,legs);
        this.tail = tail;

    }

    makenoise(sound = 'meow'){
        console.log(sound);
    }
}