 // 18. Clases

 
 import { Animal, Cat} from "./Animal.js";

 /*
 let cat = new Animal('Cat',4);
 cat.legs=3;
 
 console.log(cat);
 
 console.log(cat.legs);
  
 cat.makeNoise('Meow');

 console.log(Animal.return10());

 console.log(cat.metaData);

 */

 //This is how you call the Cat class from the Animal.js

 let cat = new Cat('Cat', 4);

 cat.makeNoise();

 console.log(cat.metaData);
 