function operation2(a) {
    console.log("in called operation, value of a is" + a);
    a = a + 1;
    console.log("in called operation, value of a is" + a);
}
var b = 2;
console.log('Value of actual operand before calling' + b);
operation2(b);
console.log('Value of actual operand after calling' + b);
