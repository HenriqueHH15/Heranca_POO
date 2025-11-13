import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {
    #matricula;
    #salario;
    constructor(matricula, nome, cpf, dtNasc, salario = 0.0) {
        super(nome, cpf, dtNasc);
        this.#matricula = matricula;
        this.#salario = salario;
    }

    get matricula(){
        return this.#matricula;
    }

    get salario(){
        return this.#salario;
    }
    set salario(salario){
        if(salario > 0.0){
            this.#salario = salario;
        }
    }

    toString() {
        return ("\nMatricula: " + this.#matricula +
            super.toString()+
            "\nSalário: " + this.#salario.toFixed(2));
    }
}

