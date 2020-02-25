class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date (data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date (this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}

class Calopsita {
    
    constructor(nome, raca) {

        this.nome = nome;
        this.raca = raca;
    }

}

class Pessoa {

    constructor(nome, sobrenome) {

        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obtemNomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

}

class Conta {   

    constructor (titular, conta) {
        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0;
    }

    deposita(valor) {
        console.log('valor depositado: ' + valor);
        this._saldo+=valor;
    }

    get saldo() {
        return this._saldo;
    }

    get titular() {
        return this._titular;
    }

    get conta() {
        return this._conta;
    }

}

var conta = new Conta('Mingau', 171);
conta.deposita(100);
console.log(conta.titular);
console.log(conta.conta);
console.log(conta.saldo);

let idade = 18;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    let msg = 'Pode dirigir';
    console.log(msg)
}
alert(msg);