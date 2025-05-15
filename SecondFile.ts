/*

//enums

enum King{
    First,
    Second,
    Third,
}

const variable=King.First;
console.log(variable);

//Note: By-default enum members start values=0 to 1 to...keep adding one



//eg.2: 

enum King{
    First=45,
    Second,
    Third,
}

//Now, second & third have values 46, 47 etc


//interface

interface User{
    readonly id:number,
    name:String,
    middleName?:String,     //optional 
    myFunction(Om:String):String,            //function that return string & take numberr
    secondWay:()=>number
}

let variable:User;

variable={
    id:123,
    name:"Om",
    myFunction(Omk:"King"){
        return "Om is King"
    },
    secondWay: ()=>{
        return 23;
    }
}




//Diff btw type & interface

interface User{
    name:String,
}

interface User{
    email:String,
}

//this code is allowed: name & email will get merged
//but this is not allowed in type as increasing the member variable in Type not allowed
//but type can be merged with other type using '&'


//e.g.

type User{
    name:String,
}
type User:{
    email:String,    //Error: 'User' is duplicate
}

*/






