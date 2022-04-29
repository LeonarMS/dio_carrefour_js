class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.tipo = tipo;
        this.numero = numero;
        this._saldo = 0;
    };

    get saldo() {
        return this._saldo;
    };
    set saldo(newSaldo) {
        this._saldo = newSaldo;
    };

    sacar(valor) {
        if (valor > this._saldo) return console.log ('Saque negado: saldo insuficiete')
        this._saldo -= valor;
    };
    depositar(valor) {
        this._saldo -= valor;
    };
};

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero, 'conta corrente');
        this._cartaoCredito = cartaoCredito;
    };

    get cartaoCredito() {
        return this._cartaoCredito;
    };
    set cartaoCredito(newCartao) {
        this._cartaoCredito = newCartao;
    };
};

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, 'conta poupança');
    }
};

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, 'conta universitária');
    }

    sacar(valor) {
        if (valor > 500) return console.log('Limite de saque de 500 reais');
        super.sacar(valor)
    };
};

const uni = new ContaUniversitaria(432, 'avb', 700, 123)

console.log(uni.saldo);
uni.saldo = 350;
console.log(uni)
uni.sacar(325)