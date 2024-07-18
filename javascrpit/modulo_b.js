//const {nome, idade, soma, areaCirculo, pi} = require('./modulo_a');
//console.log(nome);
//console.log(idade);
//console.log(soma(2,2));

//console.log(areaCirculo(2));
//console.log(pi);

const modulo_a = require('./modulo_a');

//console.log(modulo_a);

//console.log(modulo_a.array);

var time_1 = modulo_a.array[1].time;
var time_2 = time_1 + " Fluminense"
console.log("União ", time_2)

for(let i=0;i<2;i++){
    console.log(modulo_a.array[i].time);
}

