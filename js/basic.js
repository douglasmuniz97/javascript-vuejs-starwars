console.log('Olá, JavaScript!')

var userName = 'Douglas'

//document.getElementById('user-name').innerHTML = userName

// Variaveis //


//var nome = 'Mestre Yoda';
//var idade = 100;
//var jedi = true;

//console.log( nome);
//console.log( idade);
//console.log( jedi);

// Operadores matématios //

//var n1 = 5
//var n2 = 2.5

//console.log(typeof n1)
//console.log(typeof n2)

//var total = n1 / n2
//console.log(total)

// Operadores de comparação

//var v1 = 5
//var v2 = '5'

//var resultado = v1 !== v2
//console.log(resultado)

//Funções

/*
function soma  (n1, n2){
    console.log(n1 + n2)
} 

soma(5 ,5);*/

/*function boasVindas(nome){
    alert(nome + ' Sejam bem vindo a ');
}

boasVindas('Douglas');*/

/*function soma(n1, n2){
    return n1 + n2
}

var resultado = soma(5, 5);
console.log(resultado)*/

// Controle de fluxos//

/*var saldo = 1000

function saque(valor){
    if(valor > saldo){
        console.log('Valor do saque superor ao saldo')
    } else if(valor > 700){
        console.log('Valor do saque é superior ao maximo permitido por operação')
    } else {
    saldo = saldo - valor
    }
}

saque(701)
console.log(saldo)*/

//Arrays

//var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

//console.log(gaveteiro[0])

/*var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
personagens.pop('')
console.log(personagens)*/

//Controles de Repetição

//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

/*personagens.forEach(function(p){
    console.log(p)
})*/

/*for (var i in personagens){
    console.log(personagens[i])
}*/

/*for(var i = 0; i <= 10; i++){
    console.log(i)
}*/

//Objetos

/*var yoda = {
    nome: 'Mestre Yoda',
    idade: 100,
    jedi: true,
    mostra_idade: function() {
        console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
    }
}

console.log(yoda)
yoda.mostra_idade()*/

//Variavéis Constantes

const nome = 'Dart Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)