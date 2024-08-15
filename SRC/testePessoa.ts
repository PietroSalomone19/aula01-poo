//Importar a classe que quero utilizar
import { Pessoa } from './Pessoa';

//Instanciar (criar objeto)
const pessoa1: Pessoa = new Pessoa('Felisberto', 25);
const pessoa2: Pessoa = new Pessoa('maria', 21);

console.log(pessoa1.aniversario());
console.log(pessoa2.correr());
