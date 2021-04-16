class User {
    //Private field
    //# -> name = #name
    #password;
    constructor(name, email){
        this.name=name
        this.email=email
    }

    //private Method
    // #helloUser(){
    //     return "hello " + this.name 
    // }

    //Bonus tips

    //public method
    //Password Getter
    getPassword(){
        return this.#password;
    }

    //Password Setter
    setPassword(password){
        this.#password = password
    }

}

let wahdkhuna = new User("Khuna", "khuna@gmail.com");
console.log(wahdkhuna.#helloUser());