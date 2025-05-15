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

//function accepting object & return object type

function hello({name:String, isPaid:boolean}):{}{
    return {};
}

hello({name:"King", isPaid:true, email:"hi@gmail.com"})

//err: email doesn't exist in parameters.

//Solved Bad behavior: this will work

let obj={name:"King", isPaid:true, email:"hi@gmail.com"};

hello(obj);



//Type- Alias

type User={
    name:String,
    email:String,
}

function hello (num:User){
    return "hi"
}
hello ({name:"hi", email:"kar"});


//eg-2

type User={
    readonly id:String,     //can't change id value as read-only
    name:String,
    email:String
}

let MyUser:User={
    id:"1234",
    name:"King",
    email:"Mindset"
}

MyUser.name="Omkar"   //done

MyUser.id="123";  //error: wrong, as immutable




//Array in TS

const newArray: string[]=[];  //means gonna be a string array

newArray.push(5);     //error: not a string
newArray.push("5");   // correct 



//e.g.2

const newArray: []=[];   //saying it should be empty array
newArray.push("5");  //can't push anything




//e.g: 3

type User={
    name:String,
    email:String
}
const newArray: User[]=[];   //array of type:User

newArray.push({name:"King", email:"mindset"});  //correct



//Second: Method to define array

const newArray: Array<number>=[];  //can store only numbers
newArray.push(5);


//Union Type in Ts

let variable: String | number | boolean ;

variable=55;   //All are allowed
variable="55"
variable=false;

function hello(num:String|number|boolean){
    if(typeof num==="string"){
        num.toLocaleLowerCase();
    }
    if(typeof num==="number"){    // typeof "string", "number", "boolean"
        num.toString();
    }
    if(typeof num=="boolean"){
        num=false;
    }
}



const newArray: string[] | number[]=[1,3,4,5] //either of number or string not mixed
const secondArray: string[] | number[]=["2","3","4"] //either of number or string not mixed

const thirdArray: (string | number)[]=[1,2,"3"]; //can be numberr/string mixed



//Tuple in TS

let newArray:[String, number, boolean];   //order should be 

newArray=["King",1,true];   //allowed
//newArray=[1,"King",true];   //not allowed coz order is not same

//e.g. 2

type User=[string,boolean];

const MyUser:User=["King",true];

MyUser[0]="Om is King"   //allowed as it is mutable


*/
























