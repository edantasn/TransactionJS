class ListaNegociacoes {
    
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes); // retornando uma lista vazia concatenada com a atual, evitando alterações
    }

}