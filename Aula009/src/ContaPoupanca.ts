import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{
    constructor(){
        super();
        this._saldo = 0; 
    }
   
}