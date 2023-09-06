class RecordType1 {
    column1: any;

    constructor(operand1: any) {
        this.column1 = operand1;
    }
}

const object1:RecordType1 = new RecordType1(true);
console.log(object1.column1);

const object2: typeof RecordType1 = RecordType1;
const object3:RecordType1 = new object2(1.5);
console.log(object3.column1);