//Closure is a top level entity it contain a function along with its lexical scope or surrounding state or required data.

function outetrfunction() {
  let name = "Anant"; // let is a block scope.
  function innerfunction() {
    console.log(name); 
  }
   return innerfunction();
}
let inner=outerfunction();// calling the outer function
inner(); // invoking the inner function
// output: Anant

//Closure not make a copy of the variable, it uses the reference of the variable.
// So if the variable value is changed in the outer function after the closure is created, the closure reflects the updated value.
