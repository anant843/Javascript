class Human{
    //properties
    age;
    #wt=30;//private property
    ht=170;

  constructor(newAge,newHt,newWt){
    this.age=newAge;
    this.ht=newHt;
    this.#wt=newWt;

  }

    //behaviour

    walk(){
        console.log("Human is walking",this.#wt);//accessing private property using this keyword
    }

    run(){
        console.log("Human is running");
    }

    get fetchWt(){
        return this.#wt;   //getter method to access private property
}

   set modifyWt(newWt){
    this.#wt=newWt;   //setter method to modify private property
}

}

let obj=new Human(50,190,101);

console.log(obj.ht);

console.log(obj.fetchWt);
obj.modifyWt=35;
console.log(obj.fetchWt);

obj.walk();
obj.run();

function sayName(name = "Guest") {//default parameter
    console.log("My name is",name);
}
sayName();

function solve(value={age:15,name:"Anant"}) { //default parameter as object
    console.log("Hello Jii",value);
}
solve();

function solve(value=["Anant","Aditya","Vansh"]) { //default parameter as array
    console.log("Hello Jii",value);
}
solve();

function solve(value="Rahul"){
    console.log("Hello Jii",value);
}
solve(undefined); //to use default parameter we can pass undefined as argument
solve(null); //null is a value so it will be passed to the function

function getage(){
    return 25;
}
function utility(name="Guest",age=getage()){ //default parameter as function call
    console.log(name," ",age);
}
utility();// Output: Guest  25
