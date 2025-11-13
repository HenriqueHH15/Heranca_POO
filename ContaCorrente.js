import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
    #tarifa;
    #limiteCredito;
    #juros;
    #saldoDevedor;
    constructor(cliente, saldo = 0.0, tarifa = 0.0, limiteCredito = 100.0, juros = 0.0) {
        super (cliente, saldo);
        this.tarifa = tarifa;
        this.limiteCredito = limiteCredito;
        this.juros = juros;
        this.#saldoDevedor = 0.0;
    }

    get limiteCredito() {
        return this.#limiteCredito;
    }

    set limiteCredito(valor) {
        if (valor < 0.0) {
            this.#limiteCredito = 0.0;
        } else {
            this.#limiteCredito = valor;
        }
    }

    get tarifa() {
        return this.#tarifa;
    }
    set tarifa(valor) {
        if (valor < 0.0) {
            this.#tarifa = 0.0;
        } else {
            this.#tarifa = valor;
        }
    }

    get juros(){
        return this.#juros;
    }
    set juros(valor) {
        if (valor < 0.0) {
            this.#juros = 0.0;
        } else {
            this.#juros = valor;
        }
    }
    
    get saldo(){
        return (super.saldo - this.#saldoDevedor);
    }

    limiteDisponivel() {
        return (this.#limiteCredito + super.saldo - this.#saldoDevedor);
    }

    sacar(valor) {
        if (valor > 0.00 && 
            valor <= (super.saldo + this.#limiteCredito - this.#saldoDevedor) ){
            if (!super.sacar(valor)){ // se não conseguiu sacar
                valor -= super.saldo;
                super.sacar(super.saldo);
                this.#saldoDevedor += valor;
            }
            return true;
        }
        return false;
    }

    depositar(valor) {
        if (valor > 0.00) {
            if (this.#saldoDevedor > 0.00){
                if (valor > this.#saldoDevedor){
                    valor -= this.#saldoDevedor;
                    this.#saldoDevedor = 0.00;
                    super.depositar(valor);
                } else {
                    this.#saldoDevedor -= valor;
                }
            } else {
                super.depositar(valor);
            }
            return true;
        }
        return false;
    }

    viraMes(){
        let valorCobrado = this.#tarifa;
        if (this.#saldoDevedor > 0.00){
            valorCobrado += this.#saldoDevedor * this.#juros / 100;
        }
        if (!super.sacar(valorCobrado)){ // se não conseguiu sacar
            valorCobrado -= super.saldo;
            super.sacar(super.saldo);
            this.#saldoDevedor += valorCobrado;
        }
    }

    toString() {
        return ("Conta Corrente:\n" +
             super.toString() +
            "\nSaldo = R$" + this.saldo.toFixed(2) +
            "\nTarifa = R$" + this.#tarifa.toFixed(2) +
            "\nLimite de Crédito = R$" + this.#limiteCredito.toFixed(2) +
            "\nJuros = R$" + this.#juros.toFixed(2) );
    }
}

