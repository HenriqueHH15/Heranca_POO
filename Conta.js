import {Cliente} from "./Cliente.js";

export class Conta{
    static #qtContas = 0;
    #id;
    #saldo;
    #titular;

    constructor(cliente, saldo = 0.0){
        this.titular = cliente;
        if(saldo < 0){
            this.#saldo = 0;
        } else {
            this.#saldo = saldo;
        }
        Conta.#qtContas++;
        this.#id = ""+ new Date().getFullYear() + Conta.#qtContas;
    }

    static get qtContas(){
        return Conta.#qtContas;
    }

    get titular(){
        return this.#titular;
    }

    set titular(cliente){
        if(cliente != undefined && cliente instanceof Cliente){
            this.#titular = cliente;
            return cliente;
        }
        return null;
    }

    get saldo(){
        return this.#saldo;
    }

    toString(){
        return "Nº da Conta: " + this.#id +
            "\nTitular: " + this.#titular.toString();
    }

    sacar(valor){
        if(valor > 0){
            this.#saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            return true;
        }
        return false;
    }

    transferir(valor, contaDestino){
        if(this.sacar(valor)){
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}