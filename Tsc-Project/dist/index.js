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



//Note: Unlike js class, we've to pre-declare the variable
//and if declared, either define it in constructor or just give default
//value at the declaration, but you can't just leave it undefined variable.

// In js, you can clearly see the diff


//But using access specifier we can make it more simpler


class User{

    protected protected_var:number=0;

    constructor(private email:string, public name:string){
        this.email=email,
        this.name=name;
    }

    //getter helps to fetch private data of class
    get GetterBro():string{
        return this.email;
    }

    //setter return no type
    set setterBro(num1:string){
        this.email=num1;
    }

    //can create private methods as well
    private deleteBro(){
        console.log("Private method");
    }
}


const om=new User("Om","King");


const value:string=om.GetterBro;
om.setterBro="hi";




// Interface implementation
//Interface creates like a structute, whose implementation must have

//eg

interface Story{
    name:string,
    email:string,
    age:number
}

interface CreateBro{
    createStory():void;
}

//Now, we we create class implementation, then they must have atleast these properties

class User implements Story, CreateBro{
    constructor(
        public email:string,
        public name:string,
        public age:number,
        public extra:string,
    ){}

    createStory(): void {
        console.log("hi");
    }
}




//Abstract: Has both structure + code

abstract class User {
    abstract name: string; // Declares that subclass must define this

    coding(): void {
        console.log("Method");
    }
}

class SubUser extends User {
    constructor(
        public name: string,
        public email: string
    ) {
        super(); // No arguments, since base class has no constructor
    }
}

*/
