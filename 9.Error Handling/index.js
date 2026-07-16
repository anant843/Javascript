try{
    console.log("Start of try block");
    console.log(x); // x is not defined
    console.log("End of try block");
}
catch(e){
 console.log("I am inside a catch block");
 console.log("Your eror is here:",e);
}
finally{
    console.log("I am inside a finally block");
}

//create a custom error

try{
    console.log(x);
}
catch(e){
    throw new ReferenceError("Bhai phela x ko define kar le fir use karna");
}