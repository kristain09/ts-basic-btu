class RecordType1 {
    column1: any;

    constructor(operand1: any) {
        this.column1 = operand1;
    }
}

class RecordType2 {
    column2: any;

    constructor(operand1: any) {
        this.column2 = operand1;
    }
}

const object1:RecordType1 = new RecordType1(true);
const object2:RecordType2 = new RecordType2('Aha');
console.log(object1.column1);
console.log(object2.column2);