/*

The TypeScript is a stricter version of JavaScript so that we make less mistakes

let hello :String="Hello";

hello.toLocaleUpperCase();

console.log(hello);


//Number

let user: number=1234;

user=56;

console.log(user);



//any : Concept

let variable;
function hello(){
    return "thor";
}

variable=hello();


//solved: any, just declare what to give it.

let variable:String;

function hello(){
    return "thor";
}
variable=hello();



//Example-2: Accepts only particular type

function hello(num:String){
    return "Hi";
}

hello("7");



//Example 3: Default



function hello(num1:String, num2:number, num3:boolean=false){
    return "Done";
}

hello("hi",34);




//Example 4: Accepting particular type & returning particular type

function hello(num:String): number{
    return 5;
}

hello("6");


//CallBack Function

const hello=(num:String, num2: boolean=false):number=>{
    return 7;
}

hello("King");



//Concept: Object

//bad behavior: Don't take extra parameter of object

//function accepting object & return object

function hello({name:String, isPaid:boolean}):{}{
    return {};
}

hello({name:"King", isPaid:true, email:"hi@gmail.com"})

//err: email doesn't exist in parameters.

//Solved Bad behavior

let obj={name:"King", isPaid:true, email:"hi@gmail.com"};

hello(obj);

*/





