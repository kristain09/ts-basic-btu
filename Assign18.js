var object1 = function () { };
object1; // evaluate the expression, call the procedure
object1(); // call the procedure?
object1 = function operation1() { };
object1; // call the named empty procedure
object1(); // named non-empty procedure
object1 = function () { return (2); };
object1; // call unnamed non-empty function
object1(); // call unnamed non-empty function
object1 = function operation1() { return (2); };
object1; // call named non-empty function
object1(); // call named non-empty function
