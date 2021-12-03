import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    constructor(saldoInicial:number){
        super();
        super._saldo = saldoInicial;
        //super.saldo = saldoInicial;
    }
}