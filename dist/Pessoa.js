"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    // CONSTRUTOR
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
    //MÉTODOS GET E SET
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(_idade) {
        this.idade = _idade;
    }
    //MÉTODOS DIAGRAMA
    aniversario() {
        this.idade++;
        return this.idade;
    }
    correr() {
        console.log(`$nome{this.nome} está correndo... RUN ${this.nome} RUN`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map