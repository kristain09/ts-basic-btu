// Assigning unnamed operation
var object1 = function () { 1 + 2; };
var object2 = function () { 1 + 2; };
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');
object1 = function () { return (2); };
object2 = function () { return (2); };
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');
// Assigning named operation
object1 = function operation1() { 1 + 2; };
object2 = function operation1() { 1 + 2; };
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');
object1 = function operation2() { return (2); };
object2 = function operation2() { return (2); };
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');
