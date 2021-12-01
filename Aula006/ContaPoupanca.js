import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(){
        super();
        this._saldo = 0;
    }
   
}