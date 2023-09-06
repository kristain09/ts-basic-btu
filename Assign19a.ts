// Assigning unnamed operation
let object1: () => void = function ():void { 1 + 2; };
let object2: () => void = function ():void { 1 + 2; };
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');
object1 = function () { return (2); }
object2 = function () { return (2); }
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');
// Assigning named operation
object1 = function operation1():void { 1 + 2; };
object2 = function operation1():void { 1 + 2; };
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');
object1 = function operation2():number { return (2); }
object2 = function operation2():number { return (2); }
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');