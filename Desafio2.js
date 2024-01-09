//variaveis
const prompt = require('prompt-sync')();
let wincont;
let losscont;
let restart = "sim";

//Codigo
analyze()
    //functions
function analyze (){
    while (restart == "sim"){
        wincont = prompt("Quantas vitorias você tem? ");
        losscont = prompt("Quantas Derrotas você tem? ");
        saldo = wincont-losscont

        if (wincont <=10){
            console.log("O Herói tem de saldo de "+saldo+" está no nível de Ferro")
}
        if (wincont>= 11 && wincont<= 20){
            console.log("O Herói tem de saldo de "+saldo+" está no nível de Bronze")
}
        if (wincont>= 21 && wincont<= 50){
            console.log("O Herói tem de saldo de "+saldo+" está no nível de Prata")
}
        if (wincont>= 51 && wincont<= 80){
            console.log("O Herói tem de saldo de "+saldo+" está no nível de Ouro")
}
        if (wincont>= 81 && wincont<= 90){
            console.log("O Herói tem de saldo de "+saldo+" está no nível de Diamante")
}
        if (wincont>= 91 && wincont<= 100){
            console.log("O Herói tem de saldo de "+saldo+" está no nível de Lendário")
}
        if (wincont>= 101){
            console.log("O Herói tem de saldo de "+saldo+" está no nível de Desafiante")
}
restart = prompt("Continuar? ");}}

