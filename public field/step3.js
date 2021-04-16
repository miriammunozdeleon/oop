class Car {
    //Public field
    wheels;
    color;
    mark;

    constructor(wheels, color, mark){
        // On the left are properties || on the right are parameters 
        this.wheels = wheels
        this.color = color
        this.mark = mark
    }

    //public method
    startCar(){
        console.log("Vrom vrom!");
    }
}

let myMomSeat = new Car(4, "pink", "SEAT");
console.log(myMomSeat);