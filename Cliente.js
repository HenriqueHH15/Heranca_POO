import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa{
    #pontuacaoFidelidade;
    #limiteCredito;
    #categoria; //COMUM, VIP, PCD
    constructor(nome, cpf, dtNascimento, pontuacaoFidelidade = 0, limiteCredito = 100.0, categoria = "COMUM"){
        super(nome, cpf, dtNascimento);
        this.pontuacaoFidelidade = pontuacaoFidelidade;
        this.limiteCredito = limiteCredito;
        this.categoria = categoria.toUpperCase();
    }

    get pontuacaoFidelidade(){
        return this.#pontuacaoFidelidade;
    }

    set pontuacaoFidelidade(novaPontuacao){
        if(novaPontuacao >= 0){
            this.#pontuacaoFidelidade = novaPontuacao;
        } else if(this.#pontuacaoFidelidade == undefined){
            this.#pontuacaoFidelidade = 0;
        }
    }

    get limiteCredito(){
        return this.#limiteCredito;
    }

    set limiteCredito(novoLimite){
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
            "\n   Pontuação Fidelidade: " + this.#pontuacaoFidelidade +
            "\n   Limite de Crédito: " + this.#limiteCredito.toFixed(2) +
            "\n   Categoria: " + this.#categoria);
    }
}