
class Conta{
    id
    numero;
    agencia;
    saldo;

    constructor(numero, agencia, saldo, id=null){
        this.id = id;
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
    }
}

export default Conta;