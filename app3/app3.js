//require es per reutilutzar un modul. (accedir a les funcions creades a index.js)
var Flight=require('./vols');

//Creem avio1
var pl_data1={
    number: 847,
    origin: 'BCN',
    destination:'MAD'
};

//Creem avio2
var pl_data2={
    number: 848,
    origin: 'MAD',
    destination:'BCN'
};

//definim el primer vol
var pl1=new Flight();
pl1.fill(pl_data1);
//sortida de l'avio
pl1.triggerDepart();

//crear avio2
var pl2=new Flight();
pl2.fill(pl_data2);
//sortida de l'avio
pl2.triggerArrive();

//mostrem la info
console.log(pl1.getInformation());

console.log(pl2.getInformation());