function operation1() {
    return;
    console.log("This message never comes to screen");
}
function operation2(operand1) {
    return (operand1 + 1);
    console.log("This message never comes to screen");
    console.log(operand1);
}
operation1();
operation2(1);
console.log('This message still comes to screen');
