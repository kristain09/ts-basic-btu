class RecordType1 {}
class RecordType2 {}

let object1: typeof RecordType1 = RecordType1;
let object2: typeof RecordType1 = RecordType1;

object1 === object2 ? console.log('Same address value') : console.log('Distinct address value');

object2 = RecordType2;

object1 === object2 ? console.log('Same address value') : console.log('Distinct address value');