//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Polimorfismo

//superClass
function Conta(agencia, conta, saldo){

    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return;
    };
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(
    `Ag.Conta: ${this.agencia} / ${this.conta} `+
    `| saldo: R$${this.saldo}`
    );
};

const conta1 = new Conta(219, 280705, 100000);
conta1.depositar(10000);
conta1.sacar(90000);
conta1.sacar(30000);

//subclasse
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > this.saldo + this.limite){
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return;
    };
    this.saldo -= valor;
    this.verSaldo();
};

const conta2 = new ContaCorrente(219, 280705, 10, 20);
conta2.sacar(30)

//subclasse
function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
};

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta3 = new ContaPoupanca(219, 280705, 20);
conta3.sacar(30);