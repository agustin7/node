var Mates = require('./matematicas');

var operando1 = 4;
var operando2 = 3;

var calc = new Mates();

//Llamo a la función suma
calc.suma(operando1,operando2);
//Llamo a la función resta
calc.resta(operando1,operando2);
//Llamo a la funćión multiplicar
calc.multiplicar(operando1,operando2);
//Llamo a la función multiplicar pero con la constante PI
calc.multiplicar(operando1,calc.PI);
//Llamo a la funcion dividir
calc.dividir(operando1,operando2);