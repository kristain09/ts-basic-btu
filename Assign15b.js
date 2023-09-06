function operation1() {
    "world.";
}
var object1 = operation1();
console.log(object1);
object1 = operation1;
console.log(object1);
function operation2() { return ("Hello"); }
object1 = operation2();
console.log(object1);
object1 = operation2;
console.log(object1);
