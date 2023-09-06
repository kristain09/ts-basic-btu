const RecordObject1: { column1: any, column2: any } = {
    column1: undefined,
    column2: undefined
};
RecordObject1.column1 = false;
RecordObject1.column2 = 'a';
console.log(RecordObject1.column1);
console.log(RecordObject1.column2);
RecordObject1.column1 = 'b'; // Error: Type 'string' is not assignable to type 'boolean'
RecordObject1.column2 = -2; // Error: Type 'number' is not assignable to type 'string'
console.log(RecordObject1.column1);
console.log(RecordObject1.column2);