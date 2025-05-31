export class Animal {
     constructor(type, legs){
         this.type = type;
         this.legs = legs;
     }

     makeNoise(sound = 'Loud Noise'){
        console.log(sound);
     }

     static return10(){
        return 10;
     }

     get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
     }
 }

 export class Cat extends Animal {
   makeNoise(sound = "meow") {
    console.log(sound);
   }
 }