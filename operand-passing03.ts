function update_column (operand1):void
{ // pass record-operand as actual-operand
    operand1.column1 = operand1.column1 + 1;
} // because it is non-basic operand, the actual-operand is read-write
let Record_object:{column1:number} = { column1 : 10 }
console.log (Record_object.column1); // value changed
update_column (Record_object);
console.log (Record_object.column1); // value changed