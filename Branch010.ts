function operation1 ():void
{
    return;
    console.log("This message never comes to screen");// ts keep translate it
}

function operation2 (operand1:number):number
{
    return(operand1 + 1);
    console.log("This message never comes to screen"); // only warning here
    console.log(operand1); // ts keep translate it
}

operation1 ();
operation2 (1);
console.log ('This message still comes to screen');