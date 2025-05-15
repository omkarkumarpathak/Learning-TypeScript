"use strict";
console.log("TypeScript running");
//class & object
/*

class User{

    num1:string;
    num2:number;
    num3:string="";
    constructor(num1:string,num2:number){
        this.num1=num1;
        this.num2=num2;
    }
}


const object= new User("Om",23);

*/
//Note: Unlike js class, we've to pre-declare the variable 
//and if declared, either define it in constructor or just give default
//value at the declaration, but you can't just leave it undefined variable.
// In js, you can clearly see the diff
//But using access specifier we can make it more simpler
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.email = email,
            this.name = name;
    }
    //getter helps to fetch private data of class
    get GetterBro() {
        return this.email;
    }
    //setter return no type
    set setterBro(num1) {
        this.email = num1;
    }
    //can create private methods as well
    deleteBro() {
        console.log("Private method");
    }
}
const om = new User("Om", "King");
const value = om.GetterBro;
om.setterBro = "hi";
