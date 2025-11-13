export class Pessoa {
    #nome;
    #cpf;
    #dtNascimento;
    constructor (nome, cpf, dtNasc) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#dtNascimento = dtNasc;
    }
    /*... as implementações dos métodos get e set seguem
    os códigos mostrados anteriormente para a classe Cliente
    */

    get nome(){
        return this.#nome;
    }
    set nome(nome){
        if (nome.length != 0){
            this.#nome = nome;
        }
    }

    get cpf(){
        return this.#cpf;
    }

    get dtNascimento(){
        return this.#dtNascimento;
    }

    set dtNascimento(dtNascimento){
        this.#dtNascimento = dtNascimento;
    }

    toString() {
        return ("\nNome: " + this.#nome +
        "\nCPF: " + this.#cpf +
        "\nNascimento: " + this.#dtNascimento);
    } 
}