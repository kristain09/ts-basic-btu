console.log('Fahrenheit Celcius');
console.log('===================');
var Temps = [20.0, 30.0, 40.0, 50.0, 60.0];
var i = 0, count = Temps.length;
do {
    console.log(Temps[i], ' ', (Temps[i] - 32.0) * 5.0 / 9.0);
    i++;
} while (i < count);
