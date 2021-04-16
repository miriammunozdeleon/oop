
//This is a class => Type (variables, objects, arrays ... )
class Bird {
    constructor(name, type){
        //this -> bird
        //Property
        this.name = name;
        this.type = type;
    }

    sing(){
        console.log("Bird singing");
    }
}

class Canari extends Bird {
    
    //Bonus
    constructor(name, type, location){
        super(name, type);
        this.location = location;
    }

    //Bonus on how you can use extends
    sing() {
        console.log("WOOOO WOOO!");
    }
}

//instantiation == I toke the class and made an obj from it
let canari = new Bird("Foo", "Canari")
let anotherCanari = new Canari("Woo", "Canari", "Morocco");

// Obj from class Bird
// console.log(canari.sing())

// Obj from class Canari
// console.log(anotherCanari.sing());

//Creating new canari but with a location now
//Extends the parent class but also has his own propertiesq
let maroccanCanari = new Canari("Boo", "Canari", "Morocco");
console.log(maroccanCanari);

//Normal Bird obj
let goldfinch = new Bird("Too", "goldfinch");
console.log(goldfinch);
