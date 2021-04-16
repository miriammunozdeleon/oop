class Puppy{
    name;
    #dogOwner;
    constructor(name,type){
        this.name=name;
        this.type=type;
    }

    bark(){
        console.log("dog barking");
    }

    #ownerCallingDog(){
        console.log("Come here " + this.name);
    }

    setDogOwner(dogOwner){
        this.#dogOwner = dogOwner
    }

    getDogOwner(){
        return this.#dogOwner
    }
}
let pupy=new Puppy("tina","huskey")
pupy.setDogOwner("hakim")
console.log(pupy.getDogOwner());




    

