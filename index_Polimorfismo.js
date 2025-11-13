import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {Poupanca} from "./Poupanca.js";

const cliente1 = new Cliente("Bruno", "11122233344", "1997/09/03");
const cliente2 = new Cliente("Milton", "99988877766", "1990/05/20");

const vetContas = new Array(
    new ContaCorrente(cliente1, 500.00, 10.00, 200.00, 15.00),
    new Poupanca(cliente1, 1000.00, 1.0),
    new ContaCorrente(cliente2, 2000.00, 10.00, 250.00, 15.00),
    new Poupanca(cliente2, 500.00, 1.0)
);

console.log("Lista de Contas:\n")
for (let i = 0; i < vetContas.length; i++){
    console.log(vetContas[i].toString() + "\n\n")
}

console.log("Depositando R$100,00 nas Contas:\n")
for (let i = 0; i < vetContas.length; i++){
    vetContas[i].sacar(700.00);
    vetContas[i].depositar(100.00);
    console.log(vetContas[i].saldo.toFixed(2) + "\n\n")
}

console.log("Virando Mês das Contas:\n")
for (let i = 0; i < vetContas.length; i++){
    vetContas[i].viraMes();
    console.log(vetContas[i] + "\n\n");
}
