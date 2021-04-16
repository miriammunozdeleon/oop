class staticClass {
    static staticProperty = 'someValue'

    static staticMethod() {
        return "this is a static method"
    }
}

//No instansitation can get to these static class properties and methods
let anotherStatic = new staticClass()
console.log(anotherStatic.staticProperty);

//Only the class itself can get them
console.log(staticClass.staticProperty);

