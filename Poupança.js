import {Conta} from "./Conta.js";

export class Poupança extends Conta{

    #rendimento;

    constructor(cliente, saldo = 0.0, rendimento = 1){
        super(cliente, saldo);
        this.rendimento = rendimento;
    }

    get rendimeto(){
        return this.#rendimento;
    }

    set rendimento(valor){
        if(valor > 0.00){
            this.#rendimento = valor;
        }else {
            this.#rendimento = 0;
        }
    }

    viraMes(){
        if(super.saldo >= 0){
            super.saldo = super.saldo * this.#rendimento / 100;
        }
    }

    toString(){
        return "Tipo: Poupança\n" + 
        super.toString +
        "\nRendimento: " + this.#rendimento + "%";
    }
}