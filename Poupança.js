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
        let valor = super.saldo * this.#rendimento / 100;
        super.depositar(valor);
    }

    toString(){
        return "Tipo: Poupança\n" + 
        super.toString() +
        "\nSaldo: R$" + this.saldo.toFixed(2) +
        "\nRendimento: " + this.#rendimento + "%";
    }
}