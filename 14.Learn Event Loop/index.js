$.on('button', 'click', function onClicl(){
    console.log('clicked');
});//Firstly go to the web api environment to register the click event listener then go to the call back queue to wait for the click event to be triggered when the user clicks the button the event loop will push the onClick callback function to the call stack for execution


console.log('start');//synchronously log 'start'


setTimeout(function timeout(){//go to web api environment to register the timeout callback function after completing 5000ms go to the callback queue and wait for the call stack to be empty when the call stack is empty the event loop will push the timeout callback function to the call stack for execution
    console.log('timeout');
},5000);


console.log('end');//synchronously log 'end'