// Assigning unnamed operation
function operation1(): void {
    1 + 2;
}
let object1: () => void = operation1;
let object2: () => void = operation1;
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');
object1 = operation1;
object2 = operation1;
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');
// Assigning named operation
function operation2(): number {
    return 2;
}
object1 = operation1;
object2 = operation1;
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');
object1 = operation1(); // errorType void is not assignable to type () => void
object2 = operation1(); //error Type void is not assignable to type () => void
object1 == object2 ? console.log('Same address value') : console.log('Distinct address value');