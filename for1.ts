console.log ('Fahrenheit Celcius');
console.log ('===================');
var Temps:number[] = [20.0, 30.0, 40.0, 50.0, 60.0];
var i, count = Temps.length; //length(Temps);
for (i = 0; i < count; i++)
    console.log (Temps[i], ' ', (Temps[i]-32.0)*5.0/9.0);