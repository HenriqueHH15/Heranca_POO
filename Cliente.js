import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {
    #pontucaoFidelidade;
    #limiteCredito;
    #categoria; //COMUM, VIP, PCD

    constructor(nome, cpf, dtNasc, pontuacaoFidelidade = 0, limiteCredito = 100.0, categoria = "COMUM") {
        super(nome, cpf, dtNasc);
        this.pontucaoFidelidade = pontuacaoFidelidade;
        this.limiteCredito = limiteCredito;
        this.categoria = categoria.toUpperCase();
    }

    get pontucaoFidelidade() {
        return this.#pontucaoFidelidade;
    }
    set pontucaoFidelidade(novaPontuacao) {
        if (novaPontuacao >= 0) {
            this.#pontucaoFidelidade = novaPontuacao;
        } else if (this.#pontucaoFidelidade == undefined) {
            this.#pontucaoFidelidade = 0;
        }
    }

    get limiteCredito() {
        return this.#limiteCredito;
    }

    set limiteCredito(novoLimite) {
        if (novoLimite >= 0.0) {
            this.#limiteCredito = novoLimite;
        } else if (this.#limiteCredito == undefined) {
            this.#limiteCredito = 100.0;
        }
    }

    get categoria() {
        return this.#categoria;
    }

    set categoria(novaCategoria) {
        if (novaCategoria == "COMUM" || novaCategoria == "VIP" || novaCategoria == "PCD") {
            this.#categoria = novaCategoria;
        } else if (this.#categoria == undefined) {
            this.#categoria = "COMUM";
        }
    }

    toString() {
        return (super.toString() +
            "\nPontuação Fidelidade: " + this.#pontucaoFidelidade +
            "\nLimite de Crédito: " + this.#limiteCredito.toFixed(2) +
            "\nCategoria: " + this.#categoria);
    }
}