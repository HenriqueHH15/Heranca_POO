import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {Poupança} from "./Poupança.js";

var cliente1 = new Cliente("Henrique", "123.123.123-12", "15/11/2006", 10, 300, "VIP");
var cliente2 = new Cliente("Eduardo", "321.321.321-32", "21/10/2000", 5, 200, "COMUM");
var cliente3 = new Cliente("Vitor", "456.456.456-45", "15/09/2005", 1, 100, "PCD");
var cliente4 = new Cliente("Aristóteles", "789.789.789-78", "28/03/1975");
var cliente5 = new Cliente("Sócrates","987.987.987-98", "07/09/1900")

var vetClientes = [cliente1, cliente2, cliente3, cliente4];

var conta1 = new ContaCorrente(cliente1, 1000000, 1, 150, 1);
var conta2 = new Poupança(cliente2, 50000, 2);
var conta3 = new ContaCorrente(cliente3, 20000, 5, 500, 8);
var conta4 = new Poupança(cliente4, 3000, 8);
var conta5 = new ContaCorrente(cliente5, 900000, 100, 700, 4);
var conta6 = new Poupança(cliente5, 80000, 20);

var vetContasBanco = [conta1, conta2, conta3, conta4, conta5, conta6];

/*var strContas = vetContasBanco.forEach(element => {
    element.toString;
});
console.log(vetContasBanco);*/

for(let objConta of vetContasBanco){
    console.log (objConta.toString());
}
/*
console.log(vetContasBanco[0].toString());
console.log(vetContasBanco[1].toString());
console.log(vetContasBanco[2].toString());
console.log(vetContasBanco[3].toString());
console.log(vetContasBanco[4].toString());
console.log(vetContasBanco[5].toString());
*/
conta1.viraMes();
console.log("Saldo após virar o mês: " + conta1.saldo);
conta2.viraMes();
console.log("Saldo após virar o mês: " + conta2.saldo);
conta3.viraMes();
console.log("Saldo após virar o mês: " + conta3.saldo);
conta4.viraMes();
console.log("Saldo após virar o mês: " + conta4.saldo);
conta5.viraMes();
console.log("Saldo após virar o mês: " + conta5.saldo);
conta6.viraMes();
console.log("Saldo após virar o mês: " + conta6.saldo);

//pesquisando o Vitor
for(let i = 0; i < vetContasBanco.length; i++){
    if(vetContasBanco[i].titular.nome == "Vitor"){
        console.log(vetContasBanco[i].toString());
    }
}

//pesquisando o Sócrates
for(let i = 0; i < vetContasBanco.length; i++){
    if(vetContasBanco[i].titular.cpf == "987.987.987-98"){
        console.log(vetContasBanco[i].toString());
    }
}

conta1.transferir(200.00, conta2);

console.log(conta1, conta2);