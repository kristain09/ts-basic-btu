function update_column(operand1) {
    operand1.column1 = operand1.column1 + 1;
} // because it is non-basic operand, the actual-operand is read-write
var Record_object = { column1: 10 };
console.log(Record_object.column1); // value unchanged
update_column(Record_object);
console.log(Record_object.column1); // value unchanged``
