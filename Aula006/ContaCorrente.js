import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    constructor(saldoInicial){
        super();
        super._saldo = saldoInicial;
        //super.saldo = saldoInicial;
    }
}