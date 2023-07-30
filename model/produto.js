export default class Produto {
  //quando se coloca o hashtag na frente do atributo, indica que ele é privado. Isso é antigo no ecma script
  #id;
  #nome;
  #preco;

  constructor(id, nome, preco) {
    this.#id = id;
    this.#nome = nome;
    this.#preco = preco;
  }

  //Dessa forma se acessa somente o atributo da classe
  get id() {
    return this.#id;
  }
  get nome() {
    return this.#nome;
  }
  get preco() {
    return this.#preco;
  }
}
