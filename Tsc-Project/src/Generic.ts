/*
//Generics: we can give any type of data

function genericFunction<Type>(val:Type):Type{
    return val;
}

genericFunction(3);
genericFunction("3");
genericFunction(true);
genericFunction([1,2,4,5]);
genericFunction({om:"1",kar:"King"});





//generic function: Array of any data type

function genericFunction<Type>(val:Type[]):Type[]{
    return val;
}

genericFunction([1,2,3,4]);
genericFunction(["1","2","3","4"]);
genericFunction([true,false]);



//Or like can write Type[]==Array<Type>

function genericFunction<Type>(val:Array<Type>):Array<Type>{
    return val;
}

genericFunction([1,2,3,4]);
genericFunction(["1","2","3","4"]);
genericFunction([true,false]);


//Or

function genericFunction<T>(val:Array<T>):Array<T>{
    return val;
}

genericFunction([1,2,3,4]);
genericFunction(["1","2","3","4"]);
genericFunction([true,false]);





//Generic Arrow function

// const genericFunction=()=>{               JS part
//     return 5;
// }

const genericFunction=<T>(val:T[]):T=>{
    return val[0];
}
    

//Also in we can symbol as <T,>

const genericFunction=<T,>(val:T[]):T=>{
    return val[0];
}


function generateBro<T,U extends number>(val:T, val2:U){
    return "hi";
}
generateBro(1,2);  //U can only be number now


//e.g. 2

interface DB{
    name:string,
    age:number,
}

function generateBro2<T, U extends DB>(val1:T, val2:U){
    return "hi";
}
generateBro2(1, {name:"Om", age:4});




//In-operator

interface User{
    email:string,
    name:string,
    isAdmin:boolean
}

function isAdminAcc(acc:User):string{
    if("isAdmin" in acc){
        return acc.email
    }
    return "";
}

*/
