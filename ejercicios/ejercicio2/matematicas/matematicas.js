var Mates = function(){
	//creo la constante PI
	this.PI=3.1415927;

	this.operadors={
		op1:0,
		op2:0

	};
	
	//Funcion de suma
	this.suma=function(op1,op2){
		var resultado = op1+op2;
		this.operadors={
			op1:op1,
			op2:op2
		};
		console.log('La suma de '+op1+' y '+op2+' es: '+resultado);
	};

	//Funcion de resta
	this.resta = function(op1,op2){
		var resultado = op1-op2;
		this.operadors={
			op1:op1,
			op2:op2
		};
		console.log('La resta de '+op1+' y '+op2+' es: '+resultado);
	};

	//Funcion de multiplicar
	this.multiplicar= function(op1,op2){
		var resultado = op1*op2;
		this.operadors={
			op1:op1,
			op2:op2
		};
		console.log('La multiplicacion de '+op1+' y '+op2+' es: '+resultado);
	};

	//Funcion para dividir
	this.dividir = function(op1,op2){
		var resultado = op1/op2;
		this.operadors={
			op1:op1,
			op2:op2
		};
		console.log('La división de '+op1+' y '+op2+' es: '+resultado);
	};
};

module.exports = Mates;
